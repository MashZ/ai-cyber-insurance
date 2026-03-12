import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Network,
  Cpu,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  BarChart3,
  Users,
  Shield,
  Clock,
  Send,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   TICKET ROUTING ENGINE
   Faithful port of the Python ITServiceDeskRouter from PyData
   ───────────────────────────────────────────────────────────── */

const HIGH_URGENCY_SIGNALS = [
  'crashed','emergency','urgent','critical','ransomware',
  'compromised','security breach','locked out','cannot work',
  'production down','data loss',
];
const AUTOMATION_ELIGIBLE = ['Password Reset','Email/Calendar','Permissions/Access'];
const TIER_COSTS: Record<string,number> = {
  TIER_1_AUTOMATION: 0.001,
  TIER_2_AGENT_ASSIST: 0.02,
  TIER_3_ORCHESTRATION: 0.50,
};
const TIER_LABELS: Record<string,string> = {
  TIER_1_AUTOMATION: 'Tier 1 — Simple RAG Automation',
  TIER_2_AGENT_ASSIST: 'Tier 2 — Stateful Agent Assist',
  TIER_3_ORCHESTRATION: 'Tier 3 — Multi-Agent Orchestration',
};
const TIER_COLORS: Record<string,string> = {
  TIER_1_AUTOMATION: '#22c55e',
  TIER_2_AGENT_ASSIST: '#0f4377',
  TIER_3_ORCHESTRATION: '#dc2626',
};

function detectUrgency(description: string): string {
  const lower = description.toLowerCase();
  for (const signal of HIGH_URGENCY_SIGNALS) {
    if (lower.includes(signal)) return 'HIGH';
  }
  if (lower.includes('slow') || lower.includes('intermittent') || lower.includes('error'))
    return 'MEDIUM';
  return 'LOW';
}

function calcComplexity(
  category: string, priority: string, department: string, detectedUrgency: string
): number {
  let score = 1;
  if (priority === 'High' || priority === 'Critical') score += 3;
  else if (priority === 'Medium') score += 1;
  if (detectedUrgency === 'HIGH') score += 2;
  if (department === 'Executive' || department === 'Security') score += 2;
  if (category === 'Security Incident' || category === 'Hardware') score += 2;
  if (category === 'Network/VPN') score += 1;
  return Math.min(score, 10);
}

interface RoutingResult {
  tier: string;
  cost: number;
  complexity: number;
  detectedUrgency: string;
  aligned: boolean;
  rationale: string;
  approach: string;
}

function routeTicket(
  description: string, category: string, priority: string, department: string
): RoutingResult {
  const detectedUrgency = detectUrgency(description);
  const complexity = calcComplexity(category, priority, department, detectedUrgency);

  let tier: string;
  let rationale: string;
  if (AUTOMATION_ELIGIBLE.includes(category) && complexity <= 3) {
    tier = 'TIER_1_AUTOMATION';
    rationale = `Category [${category}] is automation-eligible with low complexity (${complexity})`;
  } else if (complexity >= 6 || detectedUrgency === 'HIGH') {
    tier = 'TIER_3_ORCHESTRATION';
    rationale = `High complexity (${complexity}) or urgency requires multi-agent coordination`;
  } else {
    tier = 'TIER_2_AGENT_ASSIST';
    rationale = `Moderate complexity (${complexity}) — agent assistance with AI suggestions`;
  }

  const approaches: Record<string,string> = {
    'Password Reset': 'Self-service portal with MFA verification',
    'Email/Calendar': 'Guided troubleshooting wizard',
    'Permissions/Access': 'Automated approval workflow',
  };
  const approach = tier === 'TIER_1_AUTOMATION'
    ? (approaches[category] || 'Automated resolution flow')
    : tier === 'TIER_2_AGENT_ASSIST'
      ? 'L1 agent with AI-suggested knowledge articles'
      : 'Multi-specialist coordination with SLA escalation';

  const priorityMap: Record<string,string> = { Low:'LOW', Medium:'MEDIUM', High:'HIGH', Critical:'HIGH' };
  const aligned = (priorityMap[priority] || 'LOW') === detectedUrgency;

  return {
    tier,
    cost: TIER_COSTS[tier],
    complexity,
    detectedUrgency,
    aligned,
    rationale,
    approach,
  };
}

/* ─────────────────────────────────────────────────────────────
   PRESET DEMO TICKETS
   ───────────────────────────────────────────────────────────── */
const DEMO_TICKETS = [
  {
    desc: 'Cannot log in to my account. Need password reset for corporate email.',
    category: 'Password Reset', priority: 'Low', department: 'Marketing',
  },
  {
    desc: 'VPN keeps disconnecting. This is urgent — I cannot access client files and have a deadline today.',
    category: 'Network/VPN', priority: 'Medium', department: 'Sales',
  },
  {
    desc: 'Possible security breach detected on executive laptop. Suspicious outbound traffic flagged by endpoint protection.',
    category: 'Security Incident', priority: 'Critical', department: 'Executive',
  },
  {
    desc: 'Need access to the shared marketing drive for the new campaign assets.',
    category: 'Permissions/Access', priority: 'Low', department: 'Marketing',
  },
];

/* ─────────────────────────────────────────────────────────────
   LEARNING CURVE DATA (8% monthly improvement vs static)
   ───────────────────────────────────────────────────────────── */
function learningCurveData() {
  const months = 24;
  const data = [];
  for (let m = 0; m <= months; m++) {
    const staticVal = 100 * Math.pow(0.995, m); // slight decline
    const learningVal = 100 * Math.pow(1.08, m);
    data.push({ month: m, static: Math.round(staticVal), learning: Math.round(Math.min(learningVal, 700)) });
  }
  return data;
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function EnablementLab() {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedTruth, setExpandedTruth] = useState<number | null>(0);

  // Ticket simulator state
  const [ticketDesc, setTicketDesc] = useState('');
  const [ticketCat, setTicketCat] = useState('Password Reset');
  const [ticketPri, setTicketPri] = useState('Medium');
  const [ticketDept, setTicketDept] = useState('IT');
  const [routingResult, setRoutingResult] = useState<RoutingResult | null>(null);
  const [demoResults, setDemoResults] = useState<(RoutingResult & {desc:string})[]>([]);

  const handleRoute = () => {
    if (!ticketDesc.trim()) return;
    const result = routeTicket(ticketDesc, ticketCat, ticketPri, ticketDept);
    setRoutingResult(result);
  };

  const runDemoTickets = () => {
    const results = DEMO_TICKETS.map((t) => ({
      ...routeTicket(t.desc, t.category, t.priority, t.department),
      desc: t.desc.slice(0, 80) + (t.desc.length > 80 ? '...' : ''),
    }));
    setDemoResults(results);
  };

  const curveData = learningCurveData();
  const maxLearning = Math.max(...curveData.map((d) => d.learning));

  const phases = [
    { icon: Brain, label: 'Decompose', subtitle: 'First Principles' },
    { icon: Network, label: 'Recompose', subtitle: 'Systems Thinking' },
    { icon: Cpu, label: 'Operationalize', subtitle: 'Tiered Architecture' },
  ];

  const fundamentalTruths = [
    {
      title: 'Intent Classification',
      stat: '~60%',
      statLabel: 'of tickets are Tier 1 automation candidates',
      content:
        'Tickets cluster into three archetypes based on first-contact resolution rates. Password resets resolve at 95%. Security incidents at 10%. This decomposition reveals where automation creates value and where it destroys it.',
      insight: 'Category alone predicts resolution path more accurately than priority fields.',
    },
    {
      title: 'Urgency Signals',
      stat: '15–20%',
      statLabel: 'of tickets have misaligned priority',
      content:
        'Users mark tickets as "Low" when the text says "locked out" or "cannot work." Comparing stated priority vs. text-detected urgency reveals the gap between what users say and what they need. NLP detects this automatically.',
      insight: 'Text analysis matters more than dropdown fields. Users describe pain, not priorities.',
    },
    {
      title: 'Complexity Scoring',
      stat: '~35%',
      statLabel: 'score low enough for full automation',
      content:
        'A composite score (category + priority + department + text signals) separates simple from complex. Low-complexity tickets route to $0.001 automation. High-complexity tickets route to $0.50 multi-agent orchestration. The gap is 500x.',
      insight: 'Matching cost to value reduces total spend by 85% without sacrificing quality.',
    },
    {
      title: 'Resolution Patterns',
      stat: '6.3x',
      statLabel: 'advantage from learning systems at 24 months',
      content:
        'Static systems decline over time as the world changes around them. A learning system improving 8% per month compounds to a 6.3x advantage in two years. This is the engine that separates the 5% who succeed from the 95% who do not.',
      insight: 'Not better tools — better learning loops. The compound effect is the competitive moat.',
    },
  ];

  return (
    <main className="pt-20 bg-white">
      {/* ─── Breadcrumb ─── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-6">
        <Link
          to="/resources"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#0f4377] transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Resources
        </Link>
      </div>

      {/* ─── Hero ─── */}
      <section className="pt-8 pb-12 lg:pt-10 lg:pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2b46]/5 mb-6">
              <Brain size={14} className="text-[#0f4377]" />
              <span className="text-xs font-semibold tracking-widest text-[#0f4377] uppercase">
                Agentic AI Enablement Lab
              </span>
            </div>
            <h1 className="font-fraunces text-[#0f2b46] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Systems Thinking for Enterprise AI
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-2">
              An interactive demonstration of how first-principles decomposition and systems
              thinking transform enterprise operations — using the same methodology behind the
              GM HR transformation (47,000 cases from 4-day resolution to 30 seconds).
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Walk through a real IT service desk scenario. Decompose the problem to fundamental
              truths. Recompose it with feedback loops. Operationalize it with a tiered routing
              engine you can test with live tickets.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Phase Selector ─── */}
      <section className="sticky top-20 z-40 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex">
            {phases.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setActivePhase(i)}
                className={`flex-1 flex items-center justify-center gap-2.5 py-4 text-sm font-medium transition-all border-b-2 ${
                  activePhase === i
                    ? 'border-[#0f4377] text-[#0f2b46]'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                <p.icon size={18} />
                <span className="hidden sm:inline">{p.label}</span>
                <span className="text-xs text-slate-400 hidden md:inline">— {p.subtitle}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PHASE 1: DECOMPOSE
         ════════════════════════════════════════════════════════ */}
      {activePhase === 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold mb-4">
                Phase 1: Decompose to First Principles
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Before writing any AI code, ask: what are the irreducible truths about this
                problem? Not what we assume, not what we have always done — what MUST be true?
                Four fundamental truths emerge from IT service desk data.
              </p>
            </div>

            <div className="space-y-4">
              {fundamentalTruths.map((truth, i) => (
                <div
                  key={truth.title}
                  className="border border-slate-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedTruth(expandedTruth === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-fraunces text-2xl font-bold text-[#0f4377]/20">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold">
                          Fundamental Truth #{i + 1}: {truth.title}
                        </h3>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="font-fraunces text-[#0f4377] text-xl font-semibold">
                            {truth.stat}
                          </span>
                          <span className="text-sm text-slate-500">{truth.statLabel}</span>
                        </div>
                      </div>
                    </div>
                    {expandedTruth === i ? (
                      <ChevronUp size={20} className="text-slate-400" />
                    ) : (
                      <ChevronDown size={20} className="text-slate-400" />
                    )}
                  </button>
                  {expandedTruth === i && (
                    <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {truth.content}
                      </p>
                      <div className="bg-[#0f4377]/5 rounded-lg p-4">
                        <p className="text-xs font-semibold text-[#0f4377] uppercase tracking-wider mb-1">
                          Key Insight
                        </p>
                        <p className="text-sm text-[#0f2b46] font-medium">{truth.insight}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tier Distribution Visual */}
            <div className="mt-12 bg-slate-50 rounded-2xl p-8">
              <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-6">
                Ticket Volume by Tier (from Decomposition)
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Tier 1 — Simple RAG', pct: 60, cost: '$0.001/query', color: '#22c55e' },
                  { label: 'Tier 2 — Stateful Agent', pct: 30, cost: '$0.02/query', color: '#0f4377' },
                  { label: 'Tier 3 — Multi-Agent', pct: 10, cost: '$0.50/query', color: '#dc2626' },
                ].map((t) => (
                  <div key={t.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-700">{t.label}</span>
                      <span className="text-slate-500">
                        {t.pct}% of volume &middot; {t.cost}
                      </span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${t.pct}%`, backgroundColor: t.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Result: 85% cost reduction, 2x faster responses by matching complexity to value.
              </p>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={() => setActivePhase(1)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0f4377] hover:text-[#0f2b46] transition-colors"
              >
                Next: Recompose with Systems Thinking
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════
          PHASE 2: RECOMPOSE
         ════════════════════════════════════════════════════════ */}
      {activePhase === 1 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold mb-4">
                Phase 2: Recompose with Systems Thinking
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We have four fundamental truths — but how do they interact? This is where systems
                thinking comes in. We map feedback loops, identify productive tensions, and
                simulate the compound effect of learning systems.
              </p>
            </div>

            {/* Feedback Loops */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <Network size={20} className="text-[#0f4377] mb-3" />
                <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-2">
                  Reinforcing Feedback Loops
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Better AI &#8594; More trust &#8594; More usage &#8594; Better data &#8594;
                  Even better AI. This is the virtuous cycle that compounds over time. The
                  system gets smarter with every ticket it processes.
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {['Better AI', 'More Trust', 'More Usage', 'Better Data'].map((step, i) => (
                    <span key={step} className="flex items-center gap-1.5">
                      <span className="text-xs font-medium text-[#0f4377] bg-[#0f4377]/5 px-2 py-1 rounded">
                        {step}
                      </span>
                      {i < 3 && <ArrowRight size={12} className="text-slate-300" />}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <Zap size={20} className="text-[#0f4377] mb-3" />
                <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-2">
                  Productive Tensions
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Fast resolution vs. quality is not a trade-off to eliminate — it is a design
                  input. Complex issues have LOWER satisfaction when rushed. Netflix uses
                  freedom-vs-responsibility tension to drive deployment tools. Same principle.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-xs font-semibold text-amber-700">
                    The Speed/Quality tension is NOT a trade-off — it is a design input.
                  </p>
                </div>
              </div>
            </div>

            {/* Baseline Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Avg Resolution', before: '40 min', after: '30 sec (Tier 1)' },
                { label: 'First-Contact Resolution', before: '55%', after: '67%+' },
                { label: 'Cost per Query', before: '$12–25', after: '$0.001–0.50' },
                { label: 'Annual Savings', before: 'Baseline', after: '$1.2M+ (at GM scale)' },
              ].map((m) => (
                <div key={m.label} className="bg-slate-50 rounded-xl p-5">
                  <p className="text-xs text-slate-500 font-medium mb-2">{m.label}</p>
                  <p className="text-sm text-slate-400 line-through mb-1">{m.before}</p>
                  <p className="text-sm font-semibold text-[#0f2b46]">{m.after}</p>
                </div>
              ))}
            </div>

            {/* Learning Curve Visualization */}
            <div className="bg-[#0f2b46] rounded-2xl p-8">
              <h3 className="font-fraunces text-white text-lg font-semibold mb-2">
                The Compound Effect: Static vs. Learning Systems
              </h3>
              <p className="text-white/50 text-sm mb-6">
                8% monthly improvement compounds to 6.3x advantage in 24 months.
              </p>
              <div className="relative h-48 md:h-64">
                {/* Y-axis */}
                <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-white/30 w-10">
                  <span>{maxLearning}%</span>
                  <span>{Math.round(maxLearning / 2)}%</span>
                  <span>100%</span>
                </div>
                {/* Chart area */}
                <svg
                  className="absolute left-10 top-0 right-0 bottom-6"
                  viewBox={`0 0 ${curveData.length * 14} 200`}
                  preserveAspectRatio="none"
                >
                  {/* Static line */}
                  <polyline
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                    points={curveData
                      .map(
                        (d, i) =>
                          `${i * 14},${200 - (d.static / maxLearning) * 200}`
                      )
                      .join(' ')}
                  />
                  {/* Learning line */}
                  <polyline
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    points={curveData
                      .map(
                        (d, i) =>
                          `${i * 14},${200 - (d.learning / maxLearning) * 200}`
                      )
                      .join(' ')}
                  />
                  {/* Fill under learning */}
                  <polygon
                    fill="rgba(34,197,94,0.08)"
                    points={`0,${200 - (curveData[0].learning / maxLearning) * 200} ${curveData
                      .map(
                        (d, i) =>
                          `${i * 14},${200 - (d.learning / maxLearning) * 200}`
                      )
                      .join(' ')} ${(curveData.length - 1) * 14},200 0,200`}
                  />
                </svg>
                {/* X-axis */}
                <div className="absolute left-10 right-0 bottom-0 flex justify-between text-[10px] text-white/30">
                  <span>Month 0</span>
                  <span>Month 12</span>
                  <span>Month 24</span>
                </div>
              </div>
              <div className="flex gap-6 mt-4">
                <span className="flex items-center gap-2 text-xs text-white/40">
                  <span className="w-3 h-0.5 bg-white/20 inline-block" /> Static System
                </span>
                <span className="flex items-center gap-2 text-xs text-green-400">
                  <span className="w-3 h-0.5 bg-green-400 inline-block" /> Learning System (8%/mo)
                </span>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setActivePhase(0)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors"
              >
                <ArrowLeft size={16} />
                Back: Decompose
              </button>
              <button
                onClick={() => setActivePhase(2)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0f4377] hover:text-[#0f2b46] transition-colors"
              >
                Next: Operationalize
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════
          PHASE 3: OPERATIONALIZE
         ════════════════════════════════════════════════════════ */}
      {activePhase === 2 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="font-fraunces text-[#0f2b46] text-3xl font-semibold mb-4">
                Phase 3: Operationalize with Tiered Architecture
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Translate systems thinking into executable code. The routing engine implements
                every insight from decomposition and recomposition — urgency detection, complexity
                scoring, and tiered routing that matches cost to value.
              </p>
            </div>

            {/* Architecture Table */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-10">
              <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-4">
                Tiered Architecture
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 text-slate-500 font-medium">Tier</th>
                      <th className="text-left py-3 text-slate-500 font-medium">Approach</th>
                      <th className="text-right py-3 text-slate-500 font-medium">Cost/Query</th>
                      <th className="text-right py-3 text-slate-500 font-medium">% of Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 font-semibold text-green-600">Level 1</td>
                      <td className="py-3 text-slate-600">Simple RAG (FAQ lookup)</td>
                      <td className="py-3 text-right text-slate-600">$0.001</td>
                      <td className="py-3 text-right text-slate-600">~60%</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 font-semibold text-[#0f4377]">Level 2</td>
                      <td className="py-3 text-slate-600">Stateful Agent</td>
                      <td className="py-3 text-right text-slate-600">$0.02</td>
                      <td className="py-3 text-right text-slate-600">~30%</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-red-600">Level 3</td>
                      <td className="py-3 text-slate-600">Multi-Agent Orchestration</td>
                      <td className="py-3 text-right text-slate-600">$0.50</td>
                      <td className="py-3 text-right text-slate-600">~10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── Demo Tickets ── */}
            <div className="bg-[#0f2b46] rounded-2xl p-8 mb-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-fraunces text-white text-lg font-semibold">
                    Live Ticket Routing Demo
                  </h3>
                  <p className="text-white/40 text-sm mt-1">
                    Run four pre-set tickets through the routing engine.
                  </p>
                </div>
                <button
                  onClick={runDemoTickets}
                  className="px-5 py-2.5 bg-white text-[#0f2b46] text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Run Demo Tickets
                </button>
              </div>
              {demoResults.length > 0 && (
                <div className="space-y-3">
                  {demoResults.map((r, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-white/70 text-sm truncate">{r.desc}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded"
                          style={{
                            backgroundColor: TIER_COLORS[r.tier] + '20',
                            color: TIER_COLORS[r.tier],
                          }}
                        >
                          {TIER_LABELS[r.tier]}
                        </span>
                        <span className="text-white/40 text-xs">${r.cost}/q</span>
                        {!r.aligned && (
                          <span className="flex items-center gap-1 text-xs text-amber-400">
                            <AlertTriangle size={12} />
                            Misaligned
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── Custom Ticket Simulator ── */}
            <div className="bg-white border-2 border-[#0f4377]/20 rounded-2xl p-8">
              <h3 className="font-fraunces text-[#0f2b46] text-lg font-semibold mb-1">
                Try It Yourself
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Enter a ticket description and see how the routing engine classifies it.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">
                    Ticket Description
                  </label>
                  <textarea
                    value={ticketDesc}
                    onChange={(e) => setTicketDesc(e.target.value)}
                    placeholder="e.g. My laptop crashed and I lost all my work. This is urgent."
                    className="w-full border border-slate-200 rounded-lg p-3 text-sm resize-none h-24 focus:outline-none focus:border-[#0f4377] transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">
                      Category
                    </label>
                    <select
                      value={ticketCat}
                      onChange={(e) => setTicketCat(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#0f4377]"
                    >
                      {[
                        'Password Reset','Email/Calendar','Permissions/Access',
                        'Network/VPN','Hardware','Software Installation',
                        'Security Incident','Other',
                      ].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">
                        Priority
                      </label>
                      <select
                        value={ticketPri}
                        onChange={(e) => setTicketPri(e.target.value)}
                        className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#0f4377]"
                      >
                        {['Low','Medium','High','Critical'].map((p) => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">
                        Department
                      </label>
                      <select
                        value={ticketDept}
                        onChange={(e) => setTicketDept(e.target.value)}
                        className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#0f4377]"
                      >
                        {['IT','Marketing','Sales','Finance','HR','Engineering','Executive','Security'].map(
                          (d) => <option key={d}>{d}</option>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleRoute}
                disabled={!ticketDesc.trim()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f2b46] text-white text-sm font-semibold rounded-lg hover:bg-[#0f4377] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={14} />
                Route Ticket
              </button>

              {routingResult && (
                <div className="mt-6 bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-sm font-bold px-3 py-1.5 rounded-lg"
                      style={{
                        backgroundColor: TIER_COLORS[routingResult.tier] + '15',
                        color: TIER_COLORS[routingResult.tier],
                      }}
                    >
                      {TIER_LABELS[routingResult.tier]}
                    </span>
                    <span className="text-sm text-slate-500">
                      ${routingResult.cost}/query
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400 text-xs font-medium mb-1">Complexity Score</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${routingResult.complexity * 10}%`,
                              backgroundColor: TIER_COLORS[routingResult.tier],
                            }}
                          />
                        </div>
                        <span className="text-slate-600 font-medium">
                          {routingResult.complexity}/10
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium mb-1">
                        Priority Alignment
                      </p>
                      <div className="flex items-center gap-2">
                        {routingResult.aligned ? (
                          <CheckCircle2 size={16} className="text-green-500" />
                        ) : (
                          <AlertTriangle size={16} className="text-amber-500" />
                        )}
                        <span className="text-slate-600">
                          Stated: {ticketPri} / Detected: {routingResult.detectedUrgency}
                          {!routingResult.aligned && ' — Misaligned'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium mb-1">Rationale</p>
                      <p className="text-slate-600">{routingResult.rationale}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium mb-1">
                        Resolution Approach
                      </p>
                      <p className="text-slate-600">{routingResult.approach}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setActivePhase(1)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors"
              >
                <ArrowLeft size={16} />
                Back: Recompose
              </button>
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0f4377] hover:text-[#0f2b46] transition-colors"
              >
                Back to Resources
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ─── Bottom CTA ─── */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-slate-600 leading-relaxed mb-6">
              This Lab demonstrates the methodology behind every Discimen engagement.
              Decompose. Recompose. Operationalize. The same approach that transformed
              47,000 HR cases at GM applies to your IT, finance, and operations workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#0f2b46] rounded-lg hover:bg-[#0f4377] transition-colors"
              >
                Schedule a Briefing
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0f2b46] bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
              >
                <ArrowLeft size={14} />
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
