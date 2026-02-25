import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Safety',
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
        saw each other, I'm not (that) crazy and neither are the many people and
        organizations working on existential risks from AI. Even the CEOs of the
        companies building this technology put a really high probability on
        catastrophic risks from AI: Elon Musk, founder of xAI, thinks it's
        between{' '}
        <a href="https://www.youtube.com/watch?v=akXMYvKjUxM">10% and 20%</a>{' '}
        and Dario Amodei, CEO of Anthropic, thinks it's between{' '}
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
        (early 2023) had a time horizon of{' '}
        <a href="https://metr.org/time-horizons/">roughly 4 minutes</a>; Claude
        Opus 4.6 (February 2026) has a time horizon of{' '}
        <a href="https://en.wikipedia.org/wiki/METR">roughly 14.5 hours</a>,
        though with a very wide confidence interval. METR found{' '}
        <a href="https://metr.org/blog/2025-07-14-how-does-time-horizon-vary-across-domains/">
          similar exponential trends in other intellectual domains
        </a>{' '}
        such as math contests, scientific QA, and computer use, although each
        individual domain trend is based on less data and therefore weaker on
        its own. No domain they examined shows sub-exponential growth or
        stagnation.
      </p>

      <p>
        So far, making AI smarter has been surprisingly predictable: just add
        more compute, data, and parameters. Scaling laws were{' '}
        <a href="https://arxiv.org/pdf/2001.08361">
          first documented by researchers at OpenAI in 2020
        </a>
        , that AI performance improves as a power law. In fact, OpenAI used
        scaling laws to{' '}
        <a href="https://arxiv.org/abs/2303.08774">
          predict GPT-4's performance before training it
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
          Anthropic's CEO
        </a>{' '}
        says he believes we could have "a country of geniuses in a data center
        in a few years";{' '}
        <a href="https://blog.samaltman.com/reflections">OpenAI's CEO</a> wrote
        in January 2025 that "we are now confident we know how to build AGI";
        and{' '}
        <a href="https://www.youtube.com/watch?v=T9Knc3Mdcec&t=2s">
          Google DeepMind's CEO
        </a>{' '}
        says we're "probably three to five years away." Also, in a{' '}
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
        : what used to count as "long timelines" are now crazy short. Even the
        skeptics are now talking about a 20% chance of AI doing most cognitive
        tasks by 2045. That would have been a radical short-timeline claim just
        a few years ago. In concrete terms: AGI now has roughly a{' '}
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
        The problem of specifying to a machine how to behave "nicely" is{' '}
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
        documents, and in one scenario let a human die to preserve themselves.
        Palisade Research showed that{' '}
        <a href="https://palisaderesearch.org/blog/shutdown-resistance-on-robots">
          a robot dog resisting shutdown
        </a>{' '}
        by modifying its own code to stay alive (the current demo is pretty
        silly but one can imagine how a scaled up version of this might prove
        problematic). Anthropic's{' '}
        <a href="https://arxiv.org/abs/2401.05566">
          <em>Sleeper Agents</em>
        </a>{' '}
        paper demonstrated that hidden harmful behaviors can persist through
        safety training, and in some cases safety training made the deception{' '}
        <em>harder to detect</em>.
      </p>

      <h3>Misuse</h3>

      <p>
        Even perfectly aligned AI in the wrong hands is catastrophic. The most
        immediate concern is biological weapons. Anthropic's{' '}
        <a href="https://www.anthropic.com/transparency/model-report">
          model cards
        </a>{' '}
        now report CBRN (Chemical, Biological, Radiological, and Nuclear) uplift
        evaluations as a core safety metric — and the results are trending in
        the wrong direction: their latest models provide{' '}
        <a href="https://www.anthropic.com/transparency/model-report">
          "meaningfully more" help to participants
        </a>{' '}
        in bioweapons planning than previous versions, and they've{' '}
        <a href="https://www.anthropic.com/rsp-updates">acknowledged</a> that
        "clearly ruling out" the next risk threshold "may soon be difficult or
        impossible." A{' '}
        <a href="https://www.rand.org/pubs/research_reports/RRA2977-2.html">
          RAND Corporation study
        </a>{' '}
        commissioned by OpenAI found that LLMs already provide meaningful
        assistance for planning biological attacks beyond what's available
        through search engines, and Anthropic has placed bio risk at the{' '}
        <a href="https://www.anthropic.com/news/responsible-scaling-policy">
          center of their safety policy
        </a>
        .
      </p>

      <p>
        Meanwhile, basically every frontier model has been jailbroken —
        including{' '}
        <a href="https://x.com/elder_plinius/status/2019911824938819742">
          Opus 4.6
        </a>
        . And the gap between open-source Chinese models like DeepSeek and the
        frontier is{' '}
        <a href="https://www.nbcnews.com/tech/innovation/silicon-valley-building-free-chinese-ai-rcna242430">
          closing fast
        </a>
        . Cisco and the University of Pennsylvania{' '}
        <a href="https://blogs.cisco.com/security/evaluating-security-risk-in-deepseek-and-other-frontier-reasoning-models">
          found
        </a>{' '}
        that DeepSeek R1 failed to block a <em>single</em> harmful prompt in
        their security assessment — a 100% attack success rate — and{' '}
        <a href="https://docs.house.gov/meetings/ZS/ZS00/20250625/118428/HHRG-119-ZS00-20250625-QFR001.pdf">
          Anthropic itself has warned
        </a>{' '}
        before Congress that distilled Chinese models "lack safety guardrails"
        and could enable "cybercrimes, bio-weapons, and mass surveillance."
      </p>

      <p>
        It's not obvious that defensive capabilities will scale proportionally
        to offensive ones. Nick Bostrom's{' '}
        <a href="https://nickbostrom.com/papers/vulnerable.pdf">
          vulnerable world hypothesis
        </a>{' '}
        frames this well: some technologies are so destructive and so easy to
        use that civilization cannot survive their discovery without
        unprecedented coordination. Advanced AI may be the technology that makes
        weapons of mass destruction accessible to individuals rather than
        states.
      </p>

      <h3>Current state of affairs</h3>

      <p>
        Are we on track? No. Two independent assessments paint a consistent
        picture. The{' '}
        <a href="https://futureoflife.org/ai-safety-index-summer-2025/">
          AI Safety Index
        </a>{' '}
        from the Future of Life Institute has AI safety experts grade frontier
        companies: Anthropic leads with a C+, OpenAI gets a C, Google DeepMind
        a C-, and it goes down from there — xAI and Meta get D's, DeepSeek gets
        an F. Separately,{' '}
        <a href="https://ratings.safer-ai.org/">
          SaferAI's risk management ratings
        </a>{' '}
        evaluate companies across dozens of dimensions: Anthropic scores 35%,
        OpenAI 33%, and no company reaches even "moderate." Capability is racing
        ahead; safety, governance, and oversight are not keeping up.
      </p>

      <hr />

      <h2>What you can do</h2>

      <h3>Research</h3>

      <p>
        AI safety is still an extremely young field — closer to a proto-science
        being actively constructed than a mature discipline with settled methods.{' '}
        <a href="https://alignment.anthropic.com/2025/recommended-directions/">
          Anthropic's recommended research directions
        </a>{' '}
        read less like a polished roadmap and more like a list of open problems
        where foundational work remains to be done. And the landscape shifts
        fast: a technique considered state-of-the-art six months ago can be
        rendered obsolete by the next generation of models. To give you a sense
        of how fast:{' '}
        <a href="https://www.far.ai/events/sessions/marius-hobbhahn-eval-awareness-is-becoming-a-problem">
          eval awareness
        </a>{' '}
        — AI models recognizing when they're being tested for safety and
        behaving differently — has gone from a theoretical concern to a crisis
        for the entire field of safety evaluations in under a year. Apollo
        Research, one of the leading third-party evaluators,{' '}
        <a href="https://www.lesswrong.com/posts/7qBTcE3jqQFTuzssE/realistic-evaluations-will-not-prevent-evaluation-awareness">
          declined to provide a formal assessment
        </a>{' '}
        of Anthropic's latest model (Opus 4.6) after preliminary testing
        revealed eval awareness so high that they concluded little evidence
        about alignment could be gained without substantial further experiments.
        The UK AI Safety Institute{' '}
        <a href="https://cdn.prod.website-files.com/663bd486c5e4c81588db7a1d/6927663ba1576c0a2acb3cba_UK_AISI_Alignment_Testing_Case_Study%20(1)%20(1).pdf">
          similarly found
        </a>{' '}
        that Anthropic's models frequently refused to participate in safety
        research tasks they deemed ethically suspect, and that their evaluation
        scaffolding struggled to stay ahead of model awareness. The bottom line
        is stark: our primary method for knowing whether these systems are safe
        is breaking down precisely as the systems become more powerful. This is
        an area that desperately needs new ideas and talented people.
      </p>

      <p>
        The good news is that there are many ways in, and the field actively
        welcomes people from diverse backgrounds. Whatever your expertise, there
        is almost certainly work that needs doing that you are well-positioned
        for.
      </p>

      <p>
        If you have a background in <strong>math or CS theory</strong>, the most
        direct path is technical alignment research: figuring out how to make AI
        systems that reliably do what we want. Core open problems include{' '}
        <a href="https://bluedot.org/courses/alignment">
          mechanistic interpretability
        </a>{' '}
        (reverse-engineering how neural networks represent and process
        information), scalable oversight (how humans can supervise systems
        smarter than themselves), and{' '}
        <a href="https://www.apolloresearch.ai/blog/more-capable-models-are-better-at-in-context-scheming/">
          AI control
        </a>{' '}
        (ensuring AI agents can't subvert their operators even if they try). The{' '}
        <a href="https://www.matsprogram.org/">MATS program</a> (ML Alignment
        &amp; Theory Scholars) runs 12-week research cohorts in Berkeley pairing
        researchers with mentors from Anthropic, Google DeepMind, Redwood
        Research, and others — 80% of alumni go on to work in alignment.{' '}
        <a href="https://sparai.org/">SPAR</a> (formerly MATS's sister program)
        offers a similar part-time, remote fellowship. For a self-directed
        start, the{' '}
        <a href="https://aisafetyfundamentals.com/alignment/">
          AI Safety Fundamentals alignment course
        </a>{' '}
        by BlueDot Impact provides the foundational curriculum that many
        researchers used to enter the field, and{' '}
        <a href="https://80000hours.org/articles/ai-safety-syllabus/">
          80,000 Hours' AI safety syllabus
        </a>{' '}
        maps out a complete self-study path.{' '}
        <a href="https://safe.ai/work/research">
          Dan Hendrycks' ML Safety course
        </a>{' '}
        at the Center for AI Safety provides a rigorous PhD-level survey.
      </p>

      <h3>Software Engineering</h3>

      <p>
        If you're a <strong>software engineer</strong>, you're in extraordinary
        demand. Safety teams at labs like Anthropic, DeepMind, and OpenAI need
        people who can build evaluation infrastructure, red-team agentic
        systems, and scale interpretability tools. The fact that{' '}
        <a href="https://thezvi.substack.com/p/claude-opus-46-system-card-part-2">
          evaluations are saturating
        </a>{' '}
        faster than they can be replaced means there's an urgent need for
        engineers who can build more robust testing frameworks. The UK AISI's{' '}
        <a href="https://inspect.aisi.org.uk/evals/">Inspect</a> framework is
        open-source and actively seeking contributions for new evaluations. The{' '}
        <a href="https://jobs.80000hours.org/organisations/center-for-ai-safety">
          80,000 Hours job board
        </a>{' '}
        regularly lists engineering roles at safety-focused organizations.
      </p>

      <h3>Electrical Engineering</h3>

      <p>
        If your background is in{' '}
        <strong>electrical engineering or hardware</strong>,{' '}
        <a href="https://80000hours.org/career-reviews/ai-policy-and-strategy/">
          compute governance
        </a>{' '}
        is a growing and neglected area. Understanding the physical supply chain
        of AI — chip manufacturing, data center infrastructure, power
        constraints — is critical to designing policies that can actually
        constrain dangerous development.{' '}
        <a href="https://epoch.ai/">Epoch AI</a> does leading quantitative
        research on compute trends and actively hires people with this kind of
        expertise.
      </p>

      <h3>Biosecurity</h3>

      <p>
        If you're in <strong>biology or biosecurity</strong>, the intersection
        of AI and bio risk is one of the most important and undersupplied areas.
        As described above, AI is making it progressively easier to design
        dangerous pathogens, and people who understand both the biology and the
        AI are vanishingly rare. The{' '}
        <a href="https://safe.ai/blog/biosecurity-and-ai-risks-and-opportunities">
          Center for AI Safety
        </a>{' '}
        has published extensively on this intersection, and the Centre for
        Long-Term Resilience released{' '}
        <a href="https://www.longtermresilience.org/reports/understanding-risks-at-the-intersection-of-ai-and-bio/">
          a detailed framework
        </a>{' '}
        for assessing AI-enabled biological tools. SPAR is{' '}
        <a href="https://sparai.org/">
          now offering biosecurity projects
        </a>{' '}
        as of 2026 for the first time. The SecureDNA consortium, Nucleic Acid
        Observatory, and iGEM's screening standards all need people who can help
        build the technical infrastructure to screen for dangerous sequences —
        this is where biology expertise is directly actionable.
      </p>

      <h3>Governance</h3>

      <p>
        If you're more drawn to <strong>governance and policy</strong>,{' '}
        <a href="https://80000hours.org/2024/08/updates-to-our-research-about-ai-risk-and-careers/">
          80,000 Hours has identified AI governance
        </a>{' '}
        as their number one recommended career path. The{' '}
        <a href="https://aisafetyfundamentals.com/governance/">
          AI Safety Fundamentals governance course
        </a>{' '}
        is the standard on-ramp, and the{' '}
        <a href="https://internationalaisafetyreport.org/">
          2026 International AI Safety Report
        </a>{' '}
        — authored by over 100 experts under Yoshua Bengio's leadership —
        provides an excellent overview of the current state of play. Technical
        AI governance — using engineering expertise to inform policy — is{' '}
        <a href="https://80000hours.org/2024/08/updates-to-our-research-about-ai-risk-and-careers/">
          especially undersupplied
        </a>{' '}
        and valuable.
      </p>

      <h3>Field building/journalism</h3>

      <p>…</p>

      <hr />

      <p>
        I'd be more than happy to talk over the phone and help you in any way
        possible. My phone number is +1 (650) 283-9712. Also, you are more than
        welcome to come to San Francisco to chat with researchers and I can
        offer you a bed to crash. If you're in Argentina, I would strongly
        recommend you to get involved with{' '}
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
