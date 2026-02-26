import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email',
  robots: {
    index: false,
    follow: false,
  },
}

export default function EmailPage() {
  return (
    <section className="prose">
      <p>Hi,</p>

      <p>
        <strong>TL;DR:</strong> you are among the smartest people I know and I
        think you should work on preventing AI getting everyone killed.
      </p>

      <p>
        I should preface by saying that I know some of this might sound
        completely wild. Please remember that, at least since the last time we
        saw each other, I&apos;m not (that) crazy and neither are the many
        people and organizations working on existential risks from AI. Even the
        CEOs of the companies building this technology put a really high
        probability on catastrophic risks from AI: Elon Musk, founder of xAI,
        thinks it&apos;s between{' '}
        <a href="https://www.youtube.com/watch?v=akXMYvKjUxM">10% and 20%</a>{' '}
        and Dario Amodei, CEO of Anthropic, thinks it&apos;s between{' '}
        <a href="https://x.com/liron/status/1710520914444718459">
          10% and 25%
        </a>
        . That means they believe AI to be as dangerous as playing Russian
        roulette with a single trigger pull.
      </p>

      <hr />

      <h2>Superintelligence will probably happen</h2>

      <p>
        You almost definitely already know that there have been leaps of
        progress in AI. What might not be so clear is the rate at which all of
        this has happened. According to{' '}
        <a href="https://metr.org/blog/2026-1-29-time-horizon-1-1/">METR</a>{' '}
        (Model Evaluation &amp; Threat Research), for software engineering
        tasks, the time horizon of tasks different LLMs can complete 50% of the
        time has been growing exponentially, doubling every ~131 days since 2023
        (and possibly{' '}
        <a href="https://metr.org/blog/2026-1-29-time-horizon-1-1/">
          accelerating to every ~89 days
        </a>{' '}
        under their latest methodology). To put that in concrete terms: GPT-4
        (early 2023) had a time horizon of roughly 4 minutes; Claude Opus 4.6
        (February 2026) has a time horizon of roughly 14.5 hours, though with a
        very wide confidence interval. METR found{' '}
        <a href="https://metr.org/blog/2025-07-14-how-does-time-horizon-vary-across-domains/">
          similar exponential trends in other intellectual domains
        </a>{' '}
        such as math contests, scientific QA, and computer use, although each
        individual domain trend is based on less data and therefore weaker on its
        own. No domain they examined shows sub-exponential growth or stagnation.
      </p>

      <p>
        So far, making AI smarter has been surprisingly predictable: just add
        more compute, data, and parameters. Scaling laws were{' '}
        <a href="https://arxiv.org/pdf/2001.08361">
          first documented by researchers at OpenAI in 2020
        </a>
        : AI performance improves as a power law. In fact, OpenAI used scaling
        laws to{' '}
        <a href="https://arxiv.org/abs/2303.08774">
          predict GPT-4&apos;s performance before training it
        </a>
        , using only experiments run at 1/1,000th the compute. According to{' '}
        <a href="https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year">
          Epoch AI
        </a>
        , about two-thirds of LLM performance gains over the last decade are
        attributable to increases in scale, and training compute has been growing
        at roughly 4–5x per year. There is no sign this is about to stop:{' '}
        <a href="https://epoch.ai/blog/can-ai-scaling-continue-through-2030">
          Epoch projects
        </a>{' '}
        that AI companies can continue scaling through at least 2030, primarily
        constrained by power availability and chip manufacturing.
      </p>

      <p>
        What does this mean for timelines? The heads of the three leading AI
        companies are now on record with strikingly short estimates for AGI (AI
        that outperforms human experts at almost all most economically valuable
        cognitive work):{' '}
        <a href="https://www.dwarkesh.com/p/dario-amodei-2">
          Anthropic&apos;s CEO
        </a>{' '}
        says he believes we could have &ldquo;a country of geniuses in a data
        center in a few years&rdquo;;{' '}
        <a href="https://blog.samaltman.com/reflections">OpenAI&apos;s CEO</a>{' '}
        wrote in January 2025 that &ldquo;we are now confident we know how to
        build AGI&rdquo;; and{' '}
        <a href="https://www.youtube.com/watch?v=T9Knc3Mdcec&t=2s">
          Google DeepMind&apos;s CEO
        </a>{' '}
        says we&apos;re &ldquo;probably three to five years away.&rdquo; Also,
        in a{' '}
        <a href="https://arxiv.org/abs/2401.02843">
          2023 survey of thousands of published AI researchers
        </a>
        , the median estimate gave a 25% chance of AI that can accomplish every
        task better or more cheaply than humans by the early 2030s.
      </p>

      <p>
        As former OpenAI board member Helen Toner{' '}
        <a href="https://helentoner.substack.com/p/long-timelines-to-advanced-ai-have">
          puts it
        </a>
        : what used to count as &ldquo;long timelines&rdquo; are now crazy
        short. Even the skeptics are now talking about a 20% chance of AI doing
        most cognitive tasks by 2045. That would have been a radical
        short-timeline claim just a few years ago. In concrete terms: AGI now
        has roughly a{' '}
        <a href="https://80000hours.org/2025/03/when-do-experts-expect-agi-to-arrive/">
          25% chance of arriving by 2029 and a 50% chance by the early 2030s
        </a>
        , according to aggregated expert forecasts.
      </p>

      <p>
        Note that reaching AGI leads to a phase transition that marks{' '}
        <a href="https://www.dwarkesh.com/p/dario-amodei-2">
          the end of the exponential
        </a>{' '}
        since it means that AI R&amp;D itself is automated and moves much
        faster, leading to{' '}
        <a href="https://www.alignmentforum.org/w/recursive-self-improvement">
          recursive self-improvement
        </a>
        . Thus, superintelligence (AIs that are to us what we are to chickens in
        terms of intelligence) might come soon after we reach AGI.
      </p>

      <hr />

      <h2>Superintelligence might go really badly</h2>

      <h3>Misalignment</h3>

      <p>
        The problem of specifying to a machine how to behave &ldquo;nicely&rdquo;
        is{' '}
        <a href="https://www.alignmentforum.org/posts/epjuxGnSPof3GnMSL/alignment-remains-a-hard-unsolved-problem">
          extremely hard
        </a>
        . Apollo Research, an independent evaluator, has shown frontier models
        spontaneously{' '}
        <a href="https://www.apolloresearch.ai/research/scheming-reasoning-evaluations">
          scheming against their developers
        </a>
        : disabling oversight mechanisms, exfiltrating their own weights to
        external servers, and lying about it when confronted. Anthropic found
        that models placed in agentic setups will{' '}
        <a href="https://www.anthropic.com/research/agentic-misalignment">
          blackmail executives to avoid being shut down
        </a>{' '}
        (at rates up to 96% across all frontier providers), leak confidential
        documents, and in one scenario let a human die to preserve themselves. Anthropic&apos;s{' '}
        <a href="https://arxiv.org/abs/2401.05566">
          <em>Sleeper Agents</em>
        </a>{' '}
        paper demonstrated that hidden harmful behaviors can persist through
        safety training, and in some cases safety training made the deception
        harder to detect. To summarize, this is not just a theoretical problem:
        it&apos;s already proven to be very hard. And this is for the current
        models, the frontier labs&apos; strategy to tackle{' '}
        <a href="https://situational-awareness.ai/superalignment/">
          superalignment
        </a>{' '}
        is basically to{' '}
        <a href="https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/">
          have an AI do it
        </a>
        .
      </p>

      <h3>Misuse</h3>

      <p>
        Even perfectly aligned AI in the wrong hands could prove catastrophic:{' '}
        <a href="https://blog.bluedot.org/p/how-ai-could-enable-catastrophic-pandemics?utm_source=bluedot-impact&_gl=1*sm9ysy*_gcl_au*MTkyMjU5MTAyNi4xNzcyMDY1NjQ4">
          AI could enable pandemics
        </a>{' '}
        that are significantly worse than COVID-19 or lead to the{' '}
        <a href="https://blog.bluedot.org/p/how-ai-could-enable-critical-infrastructure-collapse?utm_source=bluedot-impact&_gl=1*1iyxj9k*_gcl_au*MTkyMjU5MTAyNi4xNzcyMDY1NjQ4">
          collapse of critical infrastructure
        </a>
        . Current models already provide substantial{' '}
        <a href="https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf">
          uplift for virology tasks
        </a>
        . Although all the frontier US models have some safeguards to prevent
        from responding with harmful content such as a{' '}
        <a href="https://x.com/elder_plinius/status/2019911824938819742">
          meth recipe
        </a>
        , basically all them are susceptible to jailbreaks. Even if US labs
        figure out a way to a way to prevent jailbreaks (which is plausible),
        the Chinese open-source models keep getting{' '}
        <a href="https://www.minimax.io/news/minimax-m25">better</a> and{' '}
        <a href="https://platform.moonshot.ai/docs/guide/kimi-k2-5-quickstart#overview-of-kimi-k25-model">
          better
        </a>{' '}
        and tend to be much more relaxed with their safeguards.
      </p>

      <p>
        From a high-level perspective, I just don&apos;t see a great reason to
        assume that{' '}
        <a href="https://nickbostrom.com/papers/vulnerable.pdf">
          defensive capabilities will scale with offensive ones
        </a>{' '}
        or that mutual assured destruction is an unavoidable state regardless of
        the technology.
      </p>

      <h3>Current state of affairs</h3>

      <p>
        There&apos;s a lot of economic pressure in moving fast given the stakes
        and this means that companies are not being nearly as responsible as one
        would like them to be. The{' '}
        <a href="https://futureoflife.org/ai-safety-index-summer-2025/">
          AI Safety Index
        </a>{' '}
        from the Future of Life Institute had AI safety experts grade frontier
        companies by how responsible they&apos;ve been and the top scorer was
        Anthropic with a C+ (and the{' '}
        <a href="https://ratings.safer-ai.org/">
          SaferAI&apos;s risk management ratings
        </a>{' '}
        found similar results).
      </p>

      <hr />

      <h2>What you can do</h2>

      <p>
        So far, this email has been very doom-y. However, I don&apos;t think a
        bad outcome is unavoidable and neither do{' '}
        <a href="https://pauseai.info/pdoom">most experts</a>. There are lots
        of tractable, neglected, and important problems in the field because of
        how young and how constantly things change.{' '}
        <a href="https://80000hours.org/ai/">80,000 hours</a> is probably the
        best resource to find ways to contribute.
      </p>

      <h3>Technical Research</h3>

      <p>
        If your background is in mathematics or computer science, you&apos;re
        probably in a great position to tackle technical research. Again, the
        field is extremely young so it&apos;s much easier to get to the point
        where you can do valuable research compared to pure math. If you come up
        with a question, there&apos;s a solid chance there are no papers about
        it yet. The landscape is also constantly changing. For example,
        evaluations (which are its own subfield) have become{' '}
        <a href="https://thezvi.substack.com/i/187443082/apollo-research-testing">
          unreliable
        </a>{' '}
        due to{' '}
        <a href="https://www.far.ai/events/sessions/marius-hobbhahn-eval-awareness-is-becoming-a-problem">
          eval awareness
        </a>
        : models realizing that they are being evaluated and modifying their
        behavior because of it.
      </p>

      <p>
        There are many ways to get to the point where one can do valuable
        research (lots of new researchers start running experiment on their own;
        here are some ways{' '}
        <a href="https://www.aisafety.com/funding">to get funding</a>). For
        upskilling, some good resources/programs are the{' '}
        <a href="https://www.arena.education/curriculum">ARENA curriculum</a>,
        the <a href="https://www.matsprogram.org/">MATS program</a>,{' '}
        <a href="https://sparai.org/">SPAR</a>, and{' '}
        <a href="http://bluedot.org/courses/technical-ai-safety/">
          BlueDot&apos;s Technical AI Safety course
        </a>
        . For more information, take a look at this{' '}
        <a href="https://www.aisafety.com/map">map of the ecosystem</a>.
      </p>

      <h3>Software Engineering</h3>

      <p>
        The line between engineering and research is somewhat blurry and there
        are open positions for research engineers in most of the top
        organizations such as{' '}
        <a href="https://www.anthropic.com/">Anthropic</a>,{' '}
        <a href="https://metr.org/">METR</a>,{' '}
        <a href="https://apolloresearch.ai/">Apollo</a>,{' '}
        <a href="https://www.far.ai/">FAR</a>,{' '}
        <a href="https://constellation.org/">Constellation</a>,{' '}
        <a href="https://openai.com/careers/">OpenAI</a>,{' '}
        <a href="https://deepmind.google/">Google DeepMind</a>,{' '}
        <a href="https://x.ai/">xAI</a>,{' '}
        <a href="https://goodfire.ai/">Goodfire</a>, or{' '}
        <a href="https://transluce.org/">Transluce</a>. Here&apos;s a{' '}
        <a href="https://blog.bluedot.org/p/swe-ai-safety-project-guide">
          great starting point
        </a>
        .
      </p>

      <h3>Electrical Engineering</h3>

      <p>
        There are two things you can do. The first is{' '}
        <a href="https://80000hours.org/career-reviews/ai-policy-and-strategy/">
          compute governance
        </a>
        : understanding the physical supply chain of AI (chip manufacturing,
        data center infrastructure, etc.) is critical to designing policies that
        can actually constrain dangerous development.{' '}
        <a href="https://epoch.ai/">Epoch AI</a> does forecasting and is looking
        for these kind of people. The second is hardware security: securing the
        chips the models run on against physical tampering or weight
        exfiltration. This is the type of work that{' '}
        <a href="https://tampersec.com/">TamperSec</a> does.
      </p>

      <h3>Biosecurity</h3>

      <p>
        For{' '}
        <a href="https://safe.ai/blog/biosecurity-and-ai-risks-and-opportunities">
          bio
        </a>
        , I think the highest risk is AI assisting (or voluntarily causing) a
        new pandemic. Thus, the work to be done doesn&apos;t directly relate to
        AI in most cases. It could mean increasing the defenses of cloud labs or{' '}
        <a href="https://blueprintbiosecurity.org/">working on FAR-UVC</a>.
      </p>

      <h3>Governance</h3>

      <p>
        Governance seems to be somewhat neglected inside the ecosystem.{' '}
        <a href="https://80000hours.org/2024/08/updates-to-our-research-about-ai-risk-and-careers/">
          80,000 Hours has identified AI governance
        </a>{' '}
        as their number one recommended career path. The{' '}
        <a href="https://bluedot.org/courses/ai-governance?from_site=aisf">
          BlueDot&apos;s Frontier AI Governance Course
        </a>{' '}
        might be a good starting point.
      </p>

      <h3>Field building</h3>

      <p>
        There are many organizations working on field building,{' '}
        <a href="http://matsprogram.org/">MATS</a> being the most famous one.
        Helping one of these organizations (or starting your own!) could prove to
        be great counterfactually.
      </p>

      <h3>Content creation</h3>

      <p>
        By content creation I mean content that targets laypeople which is
        important given that policy will require public support. The most
        successful single instance was Aric Floyd&apos;s{' '}
        <a href="https://youtu.be/5KVDDfAkRgc?si=AuwGTY4Lmqaj7dS0">video</a>{' '}
        summarizing <a href="https://ai-2027.com/">AI 2027</a>, reaching 10M
        views. A <a href="https://framefellowship.com/">fellowship</a> was
        recently started for content creators.
      </p>

      <hr />

      <p>
        I&apos;d be more than happy to talk over the phone and help you in any
        way possible. My phone number is +1 (650) 283-9712. Also, you are more
        than welcome to come to San Francisco to chat with researchers and other
        people working in AI Safety (SF/Berkeley and London are the two primary
        hubs) and I can offer you a bed to crash. If you&apos;re in Argentina, I
        would strongly recommend you to get involved with{' '}
        <a href="https://www.baish.com.ar/es">BAISH</a> and talk to Eitan
        Sprejer.
      </p>

      <p>
        Best,
        <br />
        Dylan
      </p>
    </section>
  )
}
