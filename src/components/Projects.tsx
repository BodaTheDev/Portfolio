'use client';

import { ProjectLabCard } from './ProjectLabCard';
import { GlitchText } from './GlitchText';
import { Drawer } from './Drawer';
import { ProjectSpecs } from './ProjectSpecs';
import { useState } from 'react';

const projectLogs = [
    {
        category: "FINTECH / AUTOMATED TRANSACTION",
        title: "THEQA_ENGINE",
        description: "Architected a split-market transactional logic system integrated with Tap Payments. Deployed state machines and atomic database locks.",
        metrics: [
            { label: "INTEGRITY", value: "Atomic Locks" },
            { label: "CONCURRENCY", value: "Zero Double-Book" },
            { label: "STACK", value: "Node.js / BullMQ" }
        ],
        diagram: `graph TD
    A[Client Request] --> B{Distributed Lock}
    B -- Granted --> C[SQL Transaction Begin]
    C --> D[Check State: Available]
    D -- Valid --> E[Update State: Reserved]
    E --> F[SQL Commit]
    F --> G[Release Lock]
    B -- Denied --> H[409 Conflict]`,
        specs: `> **[NDA CLASSIFICATION]**: The original source code for this automated leasing engine is proprietary. The following is a functional architectural sandbox demonstrating the concurrency patterns and atomic locking mechanisms deployed.

#### Engineering Trade-Offs
| Engineering Vector | Option Selected | Alternative Rejected | Core Trade-Off Rationale |
| :--- | :--- | :--- | :--- |
| **Concurrency Control** | Redis Redlock | DB Row Locking | Bypasses database overhead for high-frequency "Availability" checks. |
| **State Management** | Finite State Machine | Boolean Flags | Prevents illegal transitions at the logic layer. |
| **Data Consistency** | Pessimistic Locking | Optimistic Locking | Eliminates retry-loops in high-contention environments. |

#### Generic Implementation: Atomic Lock Pattern
\`\`\`typescript
async function reserveResource(resourceId: string, userId: string) {
  const lock = await redis.set(\`lock:\${resourceId}\`, userId, 'NX', 'PX', 5000);
  if (!lock) throw new Error('RESOURCE_CONTENTION');
  
  return await db.transaction(async (tx) => {
    const status = await tx.query('SELECT status FROM resources WHERE id = $1 FOR UPDATE', [resourceId]);
    if (status !== 'AVAILABLE') throw new Error('INVALID_STATE');
    await tx.execute('UPDATE resources SET status = $1, owner = $2', ['RESERVED', userId]);
  });
}
\`\`\``
    },
    {
        category: "IOT / HIGH-CONCURRENCY",
        title: "WECARE_CORE",
        description: "Migrated Python core to Node.js to support 1,000+ concurrent WebSocket connections. Implemented real-time geospatial tracking with Redis and slashed monthly cloud costs by 95%.",
        metrics: [
            { label: "COST REDUCTION", value: "95% Reduction" },
            { label: "LATENCY", value: "Sub-150ms" },
            { label: "PROTOCOL", value: "Redis / MQTT" }
        ],
        diagram: `graph TD
    A[IOT Tracker] --> B[MQTT Broker]
    B --> C[Ingestion Worker]
    C --> D[(Redis Geo Index)]
    D --> E[Geofence Service]
    E -- Geofence Exit --> F[WebSocket Push]
    F --> G[Mobile App Notification]`,
        specs: `> **[NDA CLASSIFICATION]**: The production real-time safety infrastructure is strictly protected. This specification outlines the geospatial scaling patterns used to reduce operational overhead.

#### Engineering Trade-Offs
| Engineering Vector | Option Selected | Alternative Rejected | Core Trade-Off Rationale |
| :--- | :--- | :--- | :--- |
| **Data Transport** | MQTT over TCP | REST Polling | Slashes payload overhead and battery consumption. |
| **Geo-Querying** | Redis GEORADIUS | PostGIS ST_DWithin | Sub-millisecond lookup latency; essential for real-time proximity alerts. |
| **Infrastructure** | Self-Hosted OME | AWS Kinesis | 95% reduction in recurring bandwidth costs. |

#### Generic Implementation: Geospatial Update
\`\`\`typescript
async function updateCourierLocation(courierId: string, lat: number, lng: number) {
  await redis.geoadd('ACTIVE_COURIERS', lng, lat, courierId);
  const isInside = await geofenceService.checkBoundary(courierId, [lat, lng]);
  if (!isInside) await queue.add('SEND_ALERT', { courierId, event: 'EXIT' });
}
\`\`\``
    },
    {
        category: "TELEHEALTH / SECURE RTC",
        title: "RELIVE_PLATFORM",
        description: "Engineered a modular telehealth backend featuring encrypted Agora RTC pipelines, role-based JWT isolation, and custom background service logic for scheduling.",
        metrics: [
            { label: "SECURITY", value: "JWT RBAC" },
            { label: "RTC ENGINE", value: "Agora Tokens" },
            { label: "QUEUE LOGIC", value: "Express / Redis" }
        ],
        diagram: `graph TD
    A[Schedule Trigger] --> B[BullMQ Delayed Job]
    B -- T-5 Minutes --> C[Token Generator]
    C --> D[Secure Vault Fetch]
    D --> E[Agora RTC Auth]
    E --> F[Push Notification]
    F --> G[Provider/Patient Sync]`,
        specs: `> **[NDA CLASSIFICATION]**: Telehealth protocols are sensitive. This specifications detail the asynchronous scheduling logic and secure RTC token pipeline.

#### Engineering Trade-Offs
| Engineering Vector | Option Selected | Alternative Rejected | Core Trade-Off Rationale |
| :--- | :--- | :--- | :--- |
| **Job Scheduling** | BullMQ (Redis) | Node-Cron | Provides persistence, retries, and horizontal scalability. |
| **Auth Architecture** | Dynamic RTC Tokens | Static Channel IDs | Prevents unauthorized session access; tokens expire immediately. |
| **Event Handling** | Event-Driven Pub/Sub | Monolithic Logic | Decouples notification services from core engine. |

#### Generic Implementation: JIT Queue Worker
\`\`\`typescript
const sessionWorker = new Worker('session-cleanup', async (job) => {
  const { sessionId } = job.data;
  const active = await checkProviderHeartbeat(sessionId);
  if (!active) {
    await db.sessions.update({ where: { id: sessionId }, data: { status: 'EXPIRED' } });
    await agora.revokeToken(sessionId);
  }
}, { connection: redisConfig });
\`\`\``
    },
    {
        category: "LOGISTICS / DISTRIBUTED",
        title: "TRIPSAWA_LOGIC",
        description: "Designed a decoupled microservices architecture utilizing RabbitMQ and real-time MQTT geospatial matching. Developed a strict double-entry wallet system using MongoDB ACID Transactions.",
        metrics: [
            { label: "DATA INTEGRITY", value: "ACID Guaranteed" },
            { label: "MESSAGING", value: "RabbitMQ / MQTT" },
            { label: "PERSISTENCE", value: "MongoDB / Redis" }
        ],
        diagram: `graph TD
    A[Reward Trigger] --> B[Producer: RabbitMQ]
    B --> C[Consumer: Wallet Service]
    C --> D[ACID Tx Start]
    D --> E[Debit Source / Credit Target]
    E --> F[Log Immutable Audit]
    F --> G[ACID Tx Commit]
    G --> H[Ack Message]`,
        specs: `> **[NDA CLASSIFICATION]**: Financial wallet logic is under strict NDA. Below is the architectural reconstruction of the distributed ledger and transaction safety mechanisms.

#### Engineering Trade-Offs
| Engineering Vector | Option Selected | Alternative Rejected | Core Trade-Off Rationale |
| :--- | :--- | :--- | :--- |
| **Consistency** | Double-Entry Ledger | Single-Value Balance | Guarantees auditability; balance is a derivation of transactions. |
| **Reliability** | RabbitMQ (Manual Ack) | In-memory Events | Ensures no financial event is lost during service crashes. |
| **Database** | MongoDB (ACID) | SQL / Postgres | Allows for high-velocity horizontal scaling with transaction safety. |

#### Generic Implementation: ACID Ledger Block
\`\`\`typescript
async function transferPoints(from: string, to: string, amount: number) {
  const session = await db.startSession();
  try {
    await session.withTransaction(async () => {
      await ledger.create([{ account: from, delta: -amount, type: 'DEBIT' }], { session });
      await ledger.create([{ account: to, delta: amount, type: 'CREDIT' }], { session });
    });
  } finally {
    await session.endSession();
  }
}
\`\`\``
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<null | typeof projectLogs[0]>(null);

    return (
        <section id="projects" className="py-24 bg-black border-t border-border-muted arch-grid relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">

                {/* Lab Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                    <div className="lg:col-span-8">
                        <h2 className="text-[10vw] font-bold leading-[0.8] tracking-tighter uppercase mb-6 text-text-header">
                            Port- <br />
                            <GlitchText text="Folio" />
                        </h2>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end border-l border-border-muted pl-8 pb-4">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                            <p className="font-mono text-[10px] uppercase text-brand-orange tracking-widest">
                                // SYSTEM REPORT: ACTIVE DEPLOYMENTS
                            </p>
                        </div>
                        <p className="text-text-body text-sm font-medium leading-relaxed max-w-sm">
                            Each entry represents a validated architectural solution engineered for high-concurrency systems, robust data integrity, and highest efficiency.
                        </p>
                    </div>
                </div>

                {/* The Lab Grid Lounge */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {projectLogs.map((p, i) => (
                        <div key={i} onClick={() => setSelectedProject(p)} className="cursor-pointer h-full">
                            <ProjectLabCard {...p} />
                        </div>
                    ))}

                    {/* Future Expansion Tile - Link Optimized for Conversion */}
                    <a
                        href="#contact"
                        className="incubation-tile-v1 p-8 flex flex-col items-center justify-center text-center group touch-manipulation no-underline"
                    >
                        {/* Wrapper Circle */}
                        <div className="plus-circle w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#E95420"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="block"
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </div>

                        <p className="font-mono text-[10px] uppercase tracking-widest text-text-body">
                            Awaiting Next <br />
                            <span className="text-text-header group-hover:text-brand-orange transition-colors uppercase">Incubation</span>
                        </p>
                    </a>
                </div>
            </div>
            <Drawer
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title + " // SYSTEM_SPEC"}
            >
                {selectedProject && (
                    <ProjectSpecs
                        content={selectedProject.specs}
                        diagram={selectedProject.diagram}
                    />
                )}
            </Drawer>
        </section>
    );
};

export default Projects;
