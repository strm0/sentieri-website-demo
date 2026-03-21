import React from 'react'

export interface ArticleData {
  title: string
  slug: string
  publishDate: string
  featuredImage: string
  entity: 'stelle' | 'sogni'
  author: string
  content: React.ReactNode
  images: { url: string; alt: string }[]
}

export const articles: ArticleData[] = [
  {
    title: 'Our Way Here',
    slug: 'our-way-here',
    publishDate: '2025-01-01',
    featuredImage: '/images/articles/our-way-here/OurWay-5.jpg',
    entity: 'stelle',
    author: 'Giulia Morlando',
    content: (
      <>
        <p>Sentieri did not begin as a business plan, but as a long conversation.</p>

        <p>
          Jack and I have been together for six years. During that time, we lived in Amsterdam,
          Lisbon, and in between many temporary places. We travelled often, worked in art and culture,
          and were surrounded by people and ideas. But beneath the movement, there was always the same
          recurring desire: to leave the city, to find space, to host others, to build something that
          could hold more than a season.
        </p>

        <p>At first, we imagined this as a cultural project.</p>

        <p>
          We visited a bio farm in Cilento, Anna dei Sapori, where we thought we might develop a
          programme of residencies and gatherings. That visit shifted something. It made us realise
          that hosting, caring, and imagining together could not sit on top of someone else's land. If
          we wanted to do this seriously, we needed to be responsible for a place — and for how we
          sustained ourselves within it.
        </p>

        <p>
          Italy slowly entered the picture. I was born here, and it felt like a return that was not
          nostalgic but practical. At the same time, a harder question emerged: how do you live in the
          countryside without extracting from it, and without depending entirely on external funding
          or short-term projects?
        </p>

        <p>So we began looking for a farm.</p>

        <p>
          By the time we arrived in Loreto Aprutino, we had seen around thirty properties. Some were
          beautiful, some were impossible, some were already too polished. Sentieri was different. It
          had a working vineyard and olive grove, but both clearly needed care, time, and attention.
        </p>

        <p>It wasn't ready. Neither were we, and that felt right.</p>

        <p>We moved in last year, on Christmas night.</p>

        <p>
          The first winter was overwhelming. The house was, and still is, an old casolare (a rustic,
          isolated farmhouse) in need of renovation. It was cold, physically demanding, and at times
          isolating. We were learning everything at once: how to heat a space, how to repair what
          breaks, how to stay when leaving would be easier.
        </p>

        <p>What carried us through was people.</p>

        <p>
          Friends came at different moments, bringing skills, company, and encouragement. Slowly, a
          sense of shared effort formed. Community arrived before anything felt stable. And in
          hindsight, that might have been the first real harvest.
        </p>

        <p>By March, we were already in the field.</p>

        <p>
          Getting to know the vineyard marked a real shift in our lives. Farming was not something we
          inherited; it was something we chose. We chose to learn from zero, to make mistakes in
          public, and to be accountable to seasons rather than schedules.
        </p>

        <p>
          Agriculture forced us into a different rhythm, one that resists abstraction and demands
          presence. And yet, even then, we were still carrying a kind of fantasy. We thought the
          countryside would feel like space. A breath out. Finally stepping off the treadmill of the
          city and into something slower, wiser, quieter. We thought we would wake up early, drink
          coffee in the sun, and gently become the kind of people who have time.
        </p>

        <p>We thought: we will finally live properly.</p>

        <p>
          And then rural life started correcting us — very kindly, but immediately. Not because it is
          simpler, but because it is less abstract. In the city, complexity hides behind systems.
          Here, it shows up directly: the weather, the soil, the broken pump, the unexpected frost,
          the vine that doesn't care what you planned.
        </p>

        <p>Nothing is outsourced. The land does not accept shortcuts.</p>

        <p>
          We imagined freedom as emptiness — open time, open space. But farming is not emptiness. It
          is fullness. There is always something growing, something collapsing, something needing
          attention.
        </p>

        <p>
          Freedom here isn't the absence of responsibility.
          <br />
          It's a responsibility that finally feels real.
        </p>

        <p>
          Sometimes it is really like living inside a kind of rural painting: olive trees glowing at
          sunset, bread on the table, a soft life of seasons. But, more often, it is mud everywhere,
          cold hands, tools we don't know how to use, a roof that leaks, a vineyard that refuses to
          behave politely.
        </p>

        <p>
          We questioned ourselves constantly. Not in a dramatic way. In a quiet way, late at night,
          when you realise you cannot Google your way out of everything. And perhaps the hardest part
          was this: we started from zero. We weren't born into farming. We didn't inherit this. We
          chose beginnerhood. We chose to be the people asking stupid questions, who are making
          mistakes and the people learning slowly, publicly.
        </p>

        <p>Sometimes people laugh at the big projects we have for this land.</p>

        <p>
          And honestly… sometimes we laugh too.
        </p>

        <p>
          Because it is absurd.
          <br />
          And because absurdity is often where sincerity begins.
        </p>

        <p>
          What we actually do most days is simple, in the least romantic sense. We thought we'd escape
          work. We discovered a different kind of work, one that follows you outside, into the
          seasons. We thought we'd make produce, but the truth is: we are being made into different
          people by this land.
        </p>

        <p>
          At the same time, we knew we did not want to abandon the communities we came from. Sentieri
          was never meant to be a retreat from culture, but a place where culture could be
          re-grounded. This is where Sentieri di Sogni began to take shape — not as a programme
          imposed onto the land, but as something growing alongside it.
        </p>

        <p>
          Creativity has arrived here in many forms. Artists, makers, neighbours, friends, helpers.
          Everyone who comes leaves a mark — sometimes visible, sometimes not.
        </p>

        <p>
          What we do not want is to create a vacuum — a place disconnected from its surroundings. Our
          hope is to deepen our relationship with the local territory while remaining open to an
          international community. It is clear to us that community is not an idea; it is something
          you belong within.
        </p>

        <p>
          To improve the place we now inhabit, not by "activating" it, but by staying, listening, and
          participating over time. Sentieri is still at the beginning. We are learning how to live
          with limits, how to slow down without romanticising it, and how to resist city rhythms that
          we still carry in our bodies. I still overwork. I still struggle with simplicity, but the
          land does not allow shortcuts. That has become one of its most important teachings.
        </p>

        <p>
          When people drink our wine or use our olive oil, we hope they feel this honesty. That
          nothing has been added. That what they are tasting is not a concept, but the result of
          attention, patience, and care.
        </p>

        <p>
          These products are not ends in themselves.
          <br />
          They are traces of a way of being here.
        </p>

        <p>
          Sentieri is not finished. It may never be — and that is exactly what allows it to remain
          alive.
        </p>
      </>
    ),
    images: [
      { url: '/images/articles/our-way-here/OurWay-1.jpg', alt: 'View across olive groves toward Loreto Aprutino' },
      { url: '/images/articles/our-way-here/OurWay-2.jpg', alt: 'Life at Sentieri' },
      { url: '/images/articles/our-way-here/OurWay-3.jpg', alt: 'Olive harvest with nets under the trees' },
      { url: '/images/articles/our-way-here/OurWay-4.jpg', alt: 'Working the land at Sentieri' },
      { url: '/images/articles/our-way-here/OurWay-5.jpg', alt: 'The path leading up to the casolare' },
      { url: '/images/articles/our-way-here/OurWay-6.jpg', alt: 'Sentieri farmhouse and surroundings' },
      { url: '/images/articles/our-way-here/OurWay-7.jpg', alt: 'Picking elderflowers from the old wall' },
      { url: '/images/articles/our-way-here/OurWay-8.jpg', alt: 'Daily life at Sentieri' },
      { url: '/images/articles/our-way-here/OurWay-9.jpg', alt: 'Sentieri landscape' },
    ],
  },
  {
    title: 'Negotiating the Harvest',
    slug: 'negotiating-the-harvest',
    publishDate: '2025-01-01',
    featuredImage: '/images/articles/negotiating-the-harvest/WineHarvest-2.jpg',
    entity: 'stelle',
    author: 'Jack Laing Aiken',
    content: (
      <>
        <p>Harvest is often spoken about as a date on a calendar.</p>

        <p>In reality, it is a negotiation — between time, weather, plants, people, and limits.</p>

        <p>This year was our first.</p>

        <p>
          We had one hard constraint from the start: the tank. To fill the serbatoio, we needed
          enough grapes within a tight window. That meant people. It meant coordination. It meant
          accepting that the harvest would move at its own pace, not ours. When all of the elements
          came together, we had to act.
        </p>

        <p>
          We were harvesting Montepulciano — the grape that has shaped this part of Abruzzo for
          generations — but in that moment, the variety mattered less than its condition and the
          people around it.
        </p>

        <p>
          For the Rosato, we chose to harvest at night. The days were still brutally hot, and it felt
          more honest to work with the temperature rather than against it. Fifteen of us gathered in
          the vineyard in the late afternoon. By 2am, fatigue had thinned the group to six. We kept
          going until dawn.
        </p>

        <p>
          Head torches and bike lights marked where crates should be left. Grapes moved through the
          field on a customised motocarriola we had built the week before — aptly named the
          Frankenwagon. My brother carried a boom box, blasting hard-hitting Bristol beats. At times,
          returning to the vines after unloading crates felt less like farming and more like walking
          back into a forest rave at 3am.
        </p>

        <p>
          The sun coming up over the mountains also felt strangely similar to a morning after a night
          dancing in the woods — body destroyed, ears ringing, clothes soaked, mind strangely clear.
          There's a story that harvesting under a full (in our case, super) moon gives grapes higher
          energy. We don't know if that's true. But the energy of that night was unmistakable.
        </p>

        <p>We started at 15:00.</p>

        <p>We finished picking at 08:00.</p>

        <p>
          By 14:00 the next day, after pressing at the cantina, we were finally home.
        </p>

        <p>Two weeks later, we harvested the Rosso.</p>

        <p>
          This time we started at sunrise. It turned out to be a mistake. The heat softened the
          grapes quickly. Wasps and hornets gathered around the sticky juice. Filled crates had to be
          hidden under trees to keep them from overheating. The vineyard that day was steep, and
          exhaustion arrived early. It was a battle on all fronts.
        </p>

        <p>
          The group was less cohesive. Some people were brilliant — pure energy — others seemed
          unsure why they were there at all. Probably the heat.
        </p>

        <p>By nightfall, we were still short.</p>

        <p>
          An older man helping us with the tractor gave a short, almost comical motivational speech
          and sent the remaining four of us back into the vineyard. It was a new moon. No extra
          light. By then, the grapevine moth had arrived, its red eyes reflecting back at us through
          our headlamps. It felt vaguely apocalyptic.
        </p>

        <p>
          We picked for another five hours, hunting for the remaining clusters. By the end, we were
          annihilated. A few hours later, we were back up to load the truck and then headed for the
          cantina.
        </p>

        <p>And then something shifted.</p>

        <p>
          Seeing all the grapes together in the press was surreal. People at the cantina commented on
          their health — clean, intact, vibrant. We had been extremely selective, leaving anything
          questionable on the ground to return to the soil. The must was beautiful.
        </p>

        <p>
          The contrast was sharp. The week before, we had helped harvest another vineyard. Many
          grapes were affected by fungal disease. Being covered in that juice felt dirty, almost
          wrong. With ours, we were eating grapes straight from the vine, fingers sticky, laughing.
          We felt safe doing so because we knew exactly how the vineyard had been treated throughout
          the year — what had been used, what hadn't, and how closely we had been present with the
          vines at every stage.
        </p>

        <p>That difference stayed with us.</p>

        <p>
          Many vineyards around the world have to warn visitors not to touch anything because it's
          toxic. That logic feels broken. If you wouldn't touch it, why would you drink it?
        </p>

        <p>
          Hand harvesting made all of this visible. It allowed friends and family to participate. It
          forced attention. It revealed health not as a metric, but as something you can smell, taste,
          and trust.
        </p>

        <p>
          In a few months, we'll bottle around 10,000 bottles of wine. But the harvest itself —
          those two intense negotiations with time and limits — is already shared. The bottles are
          simply another way of carrying that experience forward.
        </p>
      </>
    ),
    images: [
      { url: '/images/articles/negotiating-the-harvest/WineHarvest-1.jpg', alt: 'Harvest setup with crates, tractor, and tent' },
      { url: '/images/articles/negotiating-the-harvest/WineHarvest-2.jpg', alt: 'Montepulciano grapes on the vine' },
      { url: '/images/articles/negotiating-the-harvest/WineHarvest-3.jpg', alt: 'Filled crates on the Frankenwagon in the vineyard' },
      { url: '/images/articles/negotiating-the-harvest/WineHarvest-4.jpg', alt: 'Harvesting in the vineyard' },
      { url: '/images/articles/negotiating-the-harvest/WineHarvest-5.jpg', alt: 'Working among the vines at golden hour' },
      { url: '/images/articles/negotiating-the-harvest/WineHarvest-6.jpg', alt: 'Harvest scene at Sentieri' },
      { url: '/images/articles/negotiating-the-harvest/WineHarvest-8.jpg', alt: 'Exhaustion after the night harvest' },
      { url: '/images/articles/negotiating-the-harvest/WineHarvest-9.jpg', alt: 'Pressing grapes at the cantina' },
      { url: '/images/articles/negotiating-the-harvest/WineHarvest-10.jpg', alt: 'The must after pressing' },
      { url: '/images/articles/negotiating-the-harvest/WineHarvest-11.jpg', alt: 'End of harvest' },
    ],
  },
  {
    title: 'The Pace of Olives',
    slug: 'the-pace-of-olives',
    publishDate: '2025-01-01',
    featuredImage: '/images/articles/the-pace-of-olives/Olives-4.jpg',
    entity: 'stelle',
    author: 'Jack Laing Aiken',
    content: (
      <>
        <p>
          The past weeks had been spent at shoulder height — hands moving carefully through vines,
          lifting crates, negotiating ripeness. The olive harvest is different. Everything is heavier.
          Nets drag against the slope. Tools vibrate through your arms. The work pulls downward, not
          outward.
        </p>

        <p>The first day hurt.</p>

        <p>The second day, we could barely move.</p>

        <p>
          We stood in the grove, wondering how we were going to get through three hundred trees like
          this.
        </p>

        <p>
          By the fourth day, instead of bracing ourselves against the load, our bodies had adjusted.
        </p>

        <p>
          There was no pause between seasons. As soon as the grapes were pressed, our attention had to
          shift. The vineyard had taken most of the year's focus, and we were underprepared. We had
          worked with olives before — once with{' '}
          <a
            href="https://www.annadeisapori.com/azienda-agricola/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#000000', textDecoration: 'underline' }}
          >
            experienced hands in Cilento
          </a>
          , once helping an older man in the Castelli Romani who couldn't manage alone after breaking
          his foot.
        </p>

        <p>Both experiences stayed with us.</p>

        <p>Neither prepared us for doing it ourselves.</p>

        <p>
          Money was tight after the grape harvest, so we decided to buy a single abbacchiatore (olive
          harvester), a couple of nets, and get started.
        </p>

        <p>
          Time was against us. The olive fruit fly was in the area. We monitored it closely — aware
          of its presence, but not yet at the point of threatening the harvest. Still, fear spreads
          quickly. Nearby, people began harvesting weeks earlier. We couldn't. We were still elbows
          deep in grapes.
        </p>

        <p>
          A strong windstorm passed through just before we began, knocking off many of the most
          affected olives. We lost yield, but what remained was healthier. Not a solution — just a
          kind of natural selection.
        </p>

        <p>
          At the end of the first day, we took the olives to the frantoio (oil mill). The next day,
          the oil was ready. The acidity readings — measured as free oleic acid — came back well below
          the extra virgin threshold. Quiet confirmation. The flavour was alive: peppery, green,
          vibrant. That first oil mattered. It gave us confidence. It also gave us a bit of cash to
          buy more nets and keep going.
        </p>

        <p>
          We worked with teams ranging from two to six people, eventually settling into a rhythm:
          three in the morning, three in the afternoon. Olive harvesting isn't a sprint. It's
          endurance.
        </p>

        <p>
          After a few days, everything became olives. You wake up and head straight to the field.
          It's dark again by the time you return from the frantoio. When you close your eyes at night,
          you see olives falling toward you — again and again. Your clothes take on a smell that
          doesn't wash out. A fine mist of oil settles on your skin, waking it up. It's easy to
          understand why people have used olive oil on their bodies for thousands of years.
        </p>

        <p>
          The work changes your posture. Arms raised for hours, shoulders opening, spine lengthening.
          By the end of the week, your body moves differently — looser, slower. You start to recognise
          the trees in your own movements.
        </p>

        <p>
          We harvested an average of around thirteen kilograms per tree. At roughly a sixteen per cent
          yield, that's just over two litres of oil per tree. Once you've worked for it, your
          appreciation of the value changes. We cannot view olive oil as a commodity.
        </p>

        <p>
          In total, the harvest took around two hundred and twenty human hours spread over ten days.
          As we moved through the grove, differences became obvious. Trees higher on the hill behaved
          differently from those in the valley. Some zones ripened faster. Others lagged behind.
        </p>

        <p>The grove was not uniform.</p>

        <p>The oil wasn't either.</p>

        <p>
          Because we pressed daily, each batch came out slightly different — yield, acidity, flavour.
          The oil with the "best" numbers appeared near the end, not the beginning. Numbers, it turns
          out, don't tell the whole story.
        </p>

        <p>
          Somewhere along the way, the distinction begins to blur. You stop thinking about harvesting
          the trees and start responding to them. The gestures repeat. Hands brushing branches.
          Fingers combing leaves. The same paths, day after day.
        </p>

        <p>
          By the end, it no longer feels like work imposed on the grove. It feels more like grooming —
          weeks spent gently running your hands through the same crowns, learning their shapes, their
          patience.
        </p>

        <p>When the harvest ended, it was difficult to stop.</p>

        <p>
          The trees slipped into rest almost immediately, but our bodies didn't know how to follow. We
          invented small tasks — cleaning nets, rearranging tools — just to stay inside the rhythm a
          little longer.
        </p>

        <p>
          There was a quiet sadness in letting the grove go. Weeks of daily contact ended all at once.
          The branches we had touched so carefully were now closed to us, preparing for winter.
        </p>

        <p>The crash came later. When it did, it was total.</p>

        <p>
          Most of the time, you have less control than you think. You do your best to stay attentive,
          to respond, to act when the moment arrives. Sometimes, if you stay long enough, the work
          changes you before you can name it. And then it's over.
        </p>

        <p>It wasn't really over, though.</p>

        <p>
          The house slowly filled with bottles of oil, carrying the weeks we had spent in the grove.
          Each time we pour it, we are transported back under the olive trees scattered along the
          hill. From there, the oil begins to move outward — to be shared and used as part of a new
          daily ritual by the people around us.
        </p>
      </>
    ),
    images: [
      { url: '/images/articles/the-pace-of-olives/Olives-1.jpg', alt: 'Olive branches against the evening sky' },
      { url: '/images/articles/the-pace-of-olives/Olives-2.jpg', alt: 'The olive grove' },
      { url: '/images/articles/the-pace-of-olives/Olives-3.jpg', alt: 'Working in the grove' },
      { url: '/images/articles/the-pace-of-olives/Olives-4.jpg', alt: 'Harvesting olives with nets and mountains behind' },
      { url: '/images/articles/the-pace-of-olives/Olives-5.jpg', alt: 'Olive harvest scene' },
      { url: '/images/articles/the-pace-of-olives/Olives-6.jpg', alt: 'Nets and crates in the grove with mountain view' },
      { url: '/images/articles/the-pace-of-olives/Olives-7.jpg', alt: 'Gathering olives' },
      { url: '/images/articles/the-pace-of-olives/Olives-8.jpg', alt: 'Delivering olives to the frantoio' },
      { url: '/images/articles/the-pace-of-olives/Olives-9.jpg', alt: 'Fresh olive oil' },
      { url: '/images/articles/the-pace-of-olives/Olives-10.jpg', alt: 'End of the olive harvest' },
    ],
  },
]

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getArticlesByEntity(entity: 'stelle' | 'sogni'): ArticleData[] {
  return articles.filter((a) => a.entity === entity)
}
