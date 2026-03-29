import React from 'react'
import { ContentBlock } from './types'

export interface ArticleData {
  title: string
  slug: string
  publishDate: string
  featuredImage: string
  entity: 'stelle' | 'sogni'
  author: string
  blocks?: ContentBlock[]
  /** @deprecated Use blocks instead */
  content?: React.ReactNode
  /** @deprecated Use blocks instead */
  images?: { url: string; alt: string }[]
  audioSrc?: string
}

export const articles: ArticleData[] = [
  {
    title: 'Our Way Here',
    slug: 'our-way-here',
    publishDate: '2025-01-01',
    featuredImage: '/images/articles/our-way-here/our-way-here-5.jpg',
    entity: 'stelle',
    author: 'Giulia Morlando',
    blocks: [
      // PDF page 1: two images right after title, then opening text
      { type: 'image', url: '/images/articles/our-way-here/our-way-here-1.jpg', alt: 'View across olive groves toward Loreto Aprutino' },
      { type: 'image', url: '/images/articles/our-way-here/our-way-here-2.jpg', alt: 'Two people walking along a path through the woods' },

      { type: 'text', content: (
        <p>Sentieri did not begin as a business plan, but as a long conversation.</p>
      ) },
      { type: 'text', content: (
        <p>
          Jack and I have been together for six years. During that time, we lived in Amsterdam,
          Lisbon, and in between many temporary places. We travelled often, worked in art and culture,
          and were surrounded by people and ideas. But beneath the movement, there was always the same
          recurring desire: to leave the city, to find space, to host others, to build something that
          could hold more than a season.
        </p>
      ) },
      { type: 'text', content: (
        <p>At first, we imagined this as a cultural project.</p>
      ) },

      // PDF page 2: image, then text, then image, then text
      { type: 'image', url: '/images/articles/our-way-here/our-way-here-3.jpg', alt: 'Olive harvest with nets under the trees' },

      { type: 'text', content: (
        <p>
          We visited a bio farm in Cilento, Anna dei Sapori, where we thought we might develop a
          programme of residencies and gatherings. That visit shifted something. It made us realise
          that hosting, caring, and imagining together could not sit on top of someone else's land. If
          we wanted to do this seriously, we needed to be responsible for a place — and for how we
          sustained ourselves within it.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          Italy slowly entered the picture. I was born here, and it felt like a return that was not
          nostalgic but practical. At the same time, a harder question emerged: how do you live in the
          countryside without extracting from it, and without depending entirely on external funding
          or short-term projects?
        </p>
      ) },

      { type: 'image', url: '/images/articles/our-way-here/our-way-here-4.jpg', alt: 'Aerial view from airplane window over countryside' },

      { type: 'text', content: (
        <p>So we began looking for a farm.</p>
      ) },
      { type: 'text', content: (
        <p>
          By the time we arrived in Loreto Aprutino, we had seen around thirty properties. Some were
          beautiful, some were impossible, some were already too polished. Sentieri was different. It
          had a working vineyard and olive grove, but both clearly needed care, time, and attention.
        </p>
      ) },

      // PDF page 3: text, then two images back-to-back, then text
      { type: 'text', content: (
        <p>It wasn't ready. Neither were we, and that felt right.</p>
      ) },
      { type: 'text', content: (
        <p>We moved in last year, on Christmas night.</p>
      ) },

      { type: 'image', url: '/images/articles/our-way-here/our-way-here-5.jpg', alt: 'The path leading up to the casolare' },
      { type: 'image', url: '/images/articles/our-way-here/our-way-here-6.jpg', alt: 'Person with headlamp holding a broom in empty room' },

      { type: 'text', content: (
        <p>
          The first winter was overwhelming. The house was, and still is, an old casolare (a rustic,
          isolated farmhouse) in need of renovation. It was cold, physically demanding, and at times
          isolating. We were learning everything at once: how to heat a space, how to repair what
          breaks, how to stay when leaving would be easier.
        </p>
      ) },

      // PDF page 4: several text blocks, then image, then more text
      { type: 'text', content: (
        <p>What carried us through was people.</p>
      ) },
      { type: 'text', content: (
        <p>
          Friends came at different moments, bringing skills, company, and encouragement. Slowly, a
          sense of shared effort formed. Community arrived before anything felt stable. And in
          hindsight, that might have been the first real harvest.
        </p>
      ) },
      { type: 'text', content: (
        <p>By March, we were already in the field.</p>
      ) },
      { type: 'text', content: (
        <p>
          Getting to know the vineyard marked a real shift in our lives. Farming was not something we
          inherited; it was something we chose. We chose to learn from zero, to make mistakes in
          public, and to be accountable to seasons rather than schedules.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          Agriculture forced us into a different rhythm, one that resists abstraction and demands
          presence. And yet, even then, we were still carrying a kind of fantasy. We thought the
          countryside would feel like space. A breath out. Finally stepping off the treadmill of the
          city and into something slower, wiser, quieter. We thought we would wake up early, drink
          coffee in the sun, and gently become the kind of people who have time.
        </p>
      ) },
      { type: 'text', content: (
        <p>We thought: we will finally live properly.</p>
      ) },

      { type: 'image', url: '/images/articles/our-way-here/our-way-here-7.jpg', alt: 'Two people on a ladder against a brick wall' },

      { type: 'text', content: (
        <p>
          And then rural life started correcting us — very kindly, but immediately. Not because it is
          simpler, but because it is less abstract. In the city, complexity hides behind systems.
          Here, it shows up directly: the weather, the soil, the broken pump, the unexpected frost,
          the vine that doesn't care what you planned.
        </p>
      ) },
      { type: 'text', content: (
        <p>Nothing is outsourced. The land does not accept shortcuts.</p>
      ) },

      // PDF page 5: text blocks, then image, then text
      { type: 'text', content: (
        <p>
          We imagined freedom as emptiness — open time, open space. But farming is not emptiness. It
          is fullness. There is always something growing, something collapsing, something needing
          attention.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          Freedom here isn't the absence of responsibility.
          <br />
          It's a responsibility that finally feels real.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          Sometimes it is really like living inside a kind of rural painting: olive trees glowing at
          sunset, bread on the table, a soft life of seasons. But, more often, it is mud everywhere,
          cold hands, tools we don't know how to use, a roof that leaks, a vineyard that refuses to
          behave politely.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          We questioned ourselves constantly. Not in a dramatic way. In a quiet way, late at night,
          when you realise you cannot Google your way out of everything. And perhaps the hardest part
          was this: we started from zero. We weren't born into farming. We didn't inherit this. We
          chose beginnerhood. We chose to be the people asking stupid questions, who are making
          mistakes and the people learning slowly, publicly.
        </p>
      ) },
      { type: 'text', content: (
        <p>Sometimes people laugh at the big projects we have for this land.</p>
      ) },
      { type: 'text', content: (
        <p>And honestly… sometimes we laugh too.</p>
      ) },
      { type: 'text', content: (
        <p>
          Because it is absurd.
          <br />
          And because absurdity is often where sincerity begins.
        </p>
      ) },

      { type: 'image', url: '/images/articles/our-way-here/our-way-here-8.jpg', alt: 'Food spread on a table with landscape view' },

      { type: 'text', content: (
        <p>
          What we actually do most days is simple, in the least romantic sense. We thought we'd escape
          work. We discovered a different kind of work, one that follows you outside, into the
          seasons. We thought we'd make produce, but the truth is: we are being made into different
          people by this land.
        </p>
      ) },

      // PDF page 6: text blocks, then image, then closing text
      { type: 'text', content: (
        <p>
          At the same time, we knew we did not want to abandon the communities we came from. Sentieri
          was never meant to be a retreat from culture, but a place where culture could be
          re-grounded. This is where Sentieri di Sogni began to take shape — not as a programme
          imposed onto the land, but as something growing alongside it.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          Creativity has arrived here in many forms. Artists, makers, neighbours, friends, helpers.
          Everyone who comes leaves a mark — sometimes visible, sometimes not.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          What we do not want is to create a vacuum — a place disconnected from its surroundings. Our
          hope is to deepen our relationship with the local territory while remaining open to an
          international community. It is clear to us that community is not an idea; it is something
          you belong within.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          To improve the place we now inhabit, not by "activating" it, but by staying, listening, and
          participating over time. Sentieri is still at the beginning. We are learning how to live
          with limits, how to slow down without romanticising it, and how to resist city rhythms that
          we still carry in our bodies. I still overwork. I still struggle with simplicity, but the
          land does not allow shortcuts. That has become one of its most important teachings.
        </p>
      ) },

      { type: 'image', url: '/images/articles/our-way-here/our-way-here-9.jpg', alt: 'Person walking on a hillside at Sentieri' },

      { type: 'text', content: (
        <p>
          When people drink our wine or use our olive oil, we hope they feel this honesty. That
          nothing has been added. That what they are tasting is not a concept, but the result of
          attention, patience, and care.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          These products are not ends in themselves.
          <br />
          They are traces of a way of being here.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          Sentieri is not finished. It may never be — and that is exactly what allows it to remain
          alive.
        </p>
      ) },
    ],
  },
  {
    title: 'Negotiating the Harvest',
    slug: 'negotiating-the-harvest',
    publishDate: '2025-01-01',
    featuredImage: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-2.jpg',
    entity: 'stelle',
    author: 'Jack Laing Aiken',
    blocks: [
      { type: 'image', url: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-1.jpg', alt: 'Harvest equipment and tractor at the vineyard' },

      { type: 'text', content: (
        <>
          <p>Harvest is often spoken about as a date on a calendar.</p>
          <p>In reality, it is a negotiation — between time, weather, plants, people, and limits.</p>
        </>
      ) },
      { type: 'text', content: (
        <p>This year was our first.</p>
      ) },
      { type: 'text', content: (
        <p>
          We had one hard constraint from the start: the tank. To fill the serbatoio, we needed enough
          grapes within a tight window. That meant people. It meant coordination. It meant accepting that
          the harvest would move at its own pace, not ours. When all of the elements came together, we
          had to act.
        </p>
      ) },

      { type: 'image', url: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-2.jpg', alt: 'Montepulciano grapes on the vine' },

      { type: 'text', content: (
        <p>
          We were harvesting Montepulciano — the grape that has shaped this part of Abruzzo for
          generations — but in that moment, the variety mattered less than its condition and the people
          around it.
        </p>
      ) },

      { type: 'image', url: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-3.jpg', alt: 'Grape crates loaded on vehicle in the vineyard' },

      { type: 'text', content: (
        <p>
          For the Rosato, we chose to harvest at night. The days were still brutally hot, and it felt more
          honest to work with the temperature rather than against it. Fifteen of us gathered in the vineyard
          in the late afternoon. By 2am, fatigue had thinned the group to six. We kept going until dawn.
        </p>
      ) },

      { type: 'image', url: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-4.jpg', alt: 'Night harvesting with headlamp and grape crate' },

      { type: 'text', content: (
        <p>
          Head torches and bike lights marked where crates should be left. Grapes moved through the
          field on a customised motocarriola we had built the week before — aptly named the
          Frankenwagon. My brother carried a boom box, blasting hard-hitting Bristol beats. At times,
          returning to the vines after unloading crates felt less like farming and more like walking back into
          a forest rave at 3am.
        </p>
      ) },

      { type: 'image', url: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-5.jpg', alt: 'Sunrise over the vineyard and mountains' },

      { type: 'text', content: (
        <p>
          The sun coming up over the mountains also felt strangely similar to a morning after a night
          dancing in the woods — body destroyed, ears ringing, clothes soaked, mind strangely clear.
          There's a story that harvesting under a full (in our case, super) moon gives grapes higher
          energy. We don't know if that's true. But the energy of that night was unmistakable.
        </p>
      ) },

      { type: 'image', url: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-6.jpg', alt: 'Working at the cantina with the wine press' },

      { type: 'text', content: (
        <>
          <p>We started at 15:00.</p>
          <p>We finished picking at 08:00.</p>
          <p>By 14:00 the next day, after pressing at the cantina, we were finally home.</p>
        </>
      ) },
      { type: 'text', content: (
        <p>Two weeks later, we harvested the Rosso.</p>
      ) },
      { type: 'text', content: (
        <p>
          This time we started at sunrise. It turned out to be a mistake. The heat softened the grapes
          quickly. Wasps and hornets gathered around the sticky juice. Filled crates had to be hidden
          under trees to keep them from overheating. The vineyard that day was steep, and exhaustion
          arrived early. It was a battle on all fronts.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          The group was less cohesive. Some people were brilliant — pure energy — others seemed
          unsure why they were there at all. Probably the heat.
        </p>
      ) },

      { type: 'image', url: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-8.jpg', alt: 'Person lying exhausted on the ground after harvesting' },

      { type: 'text', content: (
        <p>By nightfall, we were still short.</p>
      ) },
      { type: 'text', content: (
        <p>
          An older man helping us with the tractor gave a short, almost comical motivational speech and
          sent the remaining four of us back into the vineyard. It was a new moon. No extra light. By then,
          the grapevine moth had arrived, its red eyes reflecting back at us through our headlamps. It felt
          vaguely apocalyptic.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          We picked for another five hours, hunting for the remaining clusters. By the end, we were
          annihilated. A few hours later, we were back up to load the truck and then headed for the
          cantina.
        </p>
      ) },

      { type: 'image', url: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-9.jpg', alt: 'Two people shoveling grapes at the cantina' },

      { type: 'image', url: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-10.jpg', alt: 'Grapes together in the press' },

      { type: 'text', content: (
        <p>And then something shifted.</p>
      ) },
      { type: 'text', content: (
        <p>
          Seeing all the grapes together in the press was surreal. People at the cantina commented on
          their health — clean, intact, vibrant. We had been extremely selective, leaving anything
          questionable on the ground to return to the soil. The must was beautiful.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          The contrast was sharp. The week before, we had helped harvest another vineyard. Many
          grapes were affected by fungal disease. Being covered in that juice felt dirty, almost wrong. With
          ours, we were eating grapes straight from the vine, fingers sticky, laughing. We felt safe doing
          so because we knew exactly how the vineyard had been treated throughout the year — what
          had been used, what hadn't, and how closely we had been present with the vines at every
          stage.
        </p>
      ) },
      { type: 'text', content: (
        <p>That difference stayed with us.</p>
      ) },

      { type: 'image', url: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-11.jpg', alt: 'Person tasting wine from a glass' },

      { type: 'text', content: (
        <p>
          Many vineyards around the world have to warn visitors not to touch anything because it's toxic.
          That logic feels broken. If you wouldn't touch it, why would you drink it?
        </p>
      ) },
      { type: 'text', content: (
        <p>
          Hand harvesting made all of this visible. It allowed friends and family to participate. It forced
          attention. It revealed health not as a metric, but as something you can smell, taste, and trust.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          In a few months, we'll bottle around 10,000 bottles of wine. But the harvest itself — those two
          intense negotiations with time and limits — is already shared. The bottles are simply another
          way of carrying that experience forward.
        </p>
      ) },
    ],
  },
  {
    title: 'The Pace of Olives',
    slug: 'the-pace-of-olives',
    publishDate: '2025-01-01',
    featuredImage: '/images/articles/the-pace-of-olives/the-pace-of-olives-1.jpg',
    entity: 'stelle',
    author: 'Jack Laing Aiken',
    blocks: [
      { type: 'image', url: '/images/articles/the-pace-of-olives/the-pace-of-olives-1.jpg', alt: 'Olive branches against the evening sky' },

      { type: 'text', content: (
        <p>
          The past weeks had been spent at shoulder height — hands moving carefully through vines,
          lifting crates, negotiating ripeness. The olive harvest is different. Everything is heavier. Nets drag
          against the slope. Tools vibrate through your arms. The work pulls downward, not outward.
        </p>
      ) },

      { type: 'image', url: '/images/articles/the-pace-of-olives/the-pace-of-olives-2.jpg', alt: 'Person working among olive nets under the trees' },

      { type: 'text', content: (
        <>
          <p>The first day hurt.</p>
          <p>The second day, we could barely move.</p>
          <p>We stood in the grove, wondering how we were going to get through three hundred trees like this.</p>
          <p>By the fourth day, instead of bracing ourselves against the load, our bodies had adjusted.</p>
        </>
      ) },

      { type: 'image', url: '/images/articles/the-pace-of-olives/the-pace-of-olives-3.jpg', alt: 'Close-up of green olives on the branch' },

      { type: 'text', content: (
        <p>
          There was no pause between seasons. As soon as the grapes were pressed, our attention had
          to shift. The vineyard had taken most of the year's focus, and we were underprepared. We had
          worked with olives before — once with experienced hands in Cilento, once helping an older man
          in the Castelli Romani who couldn't manage alone after breaking his foot.
        </p>
      ) },
      { type: 'text', content: (
        <>
          <p>Both experiences stayed with us.</p>
          <p>Neither prepared us for doing it ourselves.</p>
        </>
      ) },

      { type: 'image', url: '/images/articles/the-pace-of-olives/the-pace-of-olives-4.jpg', alt: 'Olive grove landscape with harvesting nets' },

      { type: 'text', content: (
        <p>
          Money was tight after the grape harvest, so we decided to buy a single <em>abbacchiatore</em> (olive
          harvester), a couple of nets, and get started.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          Time was against us. The olive fruit fly was in the area. We monitored it closely — aware of its
          presence, but not yet at the point of threatening the harvest. Still, fear spreads quickly. Nearby,
          people began harvesting weeks earlier. We couldn't. We were still elbows deep in grapes.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          A strong windstorm passed through just before we began, knocking off many of the most
          affected olives. We lost yield, but what remained was healthier. Not a solution — just a kind of
          natural selection.
        </p>
      ) },

      { type: 'image', url: '/images/articles/the-pace-of-olives/the-pace-of-olives-5.jpg', alt: 'Crate full of freshly harvested olives' },

      { type: 'text', content: (
        <p>
          At the end of the first day, we took the olives to the <em>frantoio</em> (oil mill). The next day, the oil was
          ready. The acidity readings — measured as free oleic acid — came back well below the extra
          virgin threshold. Quiet confirmation. The flavour was alive: peppery, green, vibrant. That first oil
          mattered. It gave us confidence. It also gave us a bit of cash to buy more nets and keep going.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          We worked with teams ranging from two to six people, eventually settling into a rhythm: three in
          the morning, three in the afternoon. Olive harvesting isn't a sprint. It's endurance.
        </p>
      ) },

      { type: 'image', url: '/images/articles/the-pace-of-olives/the-pace-of-olives-6.jpg', alt: 'Olive tree branches up close' },

      { type: 'text', content: (
        <p>
          After a few days, everything became olives. You wake up and head straight to the field. It's dark
          again by the time you return from the <em>frantoio</em>. When you close your eyes at night, you see
          olives falling toward you — again and again. Your clothes take on a smell that doesn't wash out.
          A fine mist of oil settles on your skin, waking it up. It's easy to understand why people have used
          olive oil on their bodies for thousands of years.
        </p>
      ) },

      { type: 'image', url: '/images/articles/the-pace-of-olives/the-pace-of-olives-7.jpg', alt: 'Person harvesting olives with nets spread below' },

      { type: 'text', content: (
        <p>
          The work changes your posture. Arms raised for hours, shoulders opening, spine lengthening.
          By the end of the week, your body moves differently — looser, slower. You start to recognise the
          trees in your own movements.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          We harvested an average of around thirteen kilograms per tree. At roughly a sixteen per cent
          yield, that's just over two litres of oil per tree. Once you've worked for it, your appreciation of the
          value changes. We cannot view olive oil as a commodity.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          In total, the harvest took around two hundred and twenty human hours spread over ten days. As
          we moved through the grove, differences became obvious. Trees higher on the hill behaved
          differently from those in the valley. Some zones ripened faster. Others lagged behind.
        </p>
      ) },
      { type: 'text', content: (
        <>
          <p>The grove was not uniform.</p>
          <p>The oil wasn't either.</p>
        </>
      ) },

      { type: 'image', url: '/images/articles/the-pace-of-olives/the-pace-of-olives-8.jpg', alt: 'Ground covered in fallen olives and leaves' },

      { type: 'text', content: (
        <p>
          Because we pressed daily, each batch came out slightly different — yield, acidity, flavour. The
          oil with the "best" numbers appeared near the end, not the beginning. Numbers, it turns out,
          don't tell the whole story.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          Somewhere along the way, the distinction begins to blur. You stop thinking about harvesting
          the trees and start responding to them. The gestures repeat. Hands brushing branches. Fingers
          combing leaves. The same paths, day after day.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          By the end, it no longer feels like work imposed on the grove. It feels more like grooming —
          weeks spent gently running your hands through the same crowns, learning their shapes, their
          patience.
        </p>
      ) },

      { type: 'image', url: '/images/articles/the-pace-of-olives/the-pace-of-olives-9.jpg', alt: 'Fire burning in the olive grove at dusk' },

      { type: 'text', content: (
        <p>When the harvest ended, it was difficult to stop.</p>
      ) },
      { type: 'text', content: (
        <p>
          The trees slipped into rest almost immediately, but our bodies didn't know how to follow. We
          invented small tasks — cleaning nets, rearranging tools — just to stay inside the rhythm a little
          longer.
        </p>
      ) },
      { type: 'text', content: (
        <p>
          There was a quiet sadness in letting the grove go. Weeks of daily contact ended all at once. The
          branches we had touched so carefully were now closed to us, preparing for winter.
        </p>
      ) },
      { type: 'text', content: (
        <p>The crash came later. When it did, it was total.</p>
      ) },
      { type: 'text', content: (
        <p>
          Most of the time, you have less control than you think. You do your best to stay attentive, to
          respond, to act when the moment arrives. Sometimes, if you stay long enough, the work
          changes you before you can name it. And then it's over.
        </p>
      ) },
      { type: 'text', content: (
        <p>It wasn't really over, though.</p>
      ) },

      { type: 'image', url: '/images/articles/the-pace-of-olives/the-pace-of-olives-10.jpg', alt: 'Sentieri olive oil bottle resting on an old tree trunk' },

      { type: 'text', content: (
        <p>
          The house slowly filled with bottles of oil, carrying the weeks we had spent in the grove. Each
          time we pour it, we are transported back under the olive trees scattered along the hill. From
          there, the oil begins to move outward — to be shared and used as part of a new daily ritual by
          the people around us.
        </p>
      ) },
    ],
  },
  {
    title: 'A Walk from Elsewhere',
    slug: 'a-walk-from-elsewhere',
    publishDate: '2025-01-15',
    featuredImage: '/images/articles/a-walk-from-elsewhere/Walk_with_image-5.jpg',
    entity: 'sogni',
    author: 'Giulia Morlando',
    audioSrc: '/audio/a-walk-from-elsewhere.mp3',
    content: (
      <>
        <p>
          Before Sentieri became a concrete project, my artistic practice was already asking: how do
          we learn to belong to a landscape without reducing it to an image, a resource, or a
          backdrop?
        </p>

        <p>
          This audio walk was created for an exhibition in Amsterdam, bringing a piece of Sentieri
          over there. It was meant to investigate how much of a place we can carry within and how
          much can be transposed onto another place. It guides the listener through small shifts in
          perception: footsteps, edges, atmospheres, the feeling of being inside a place rather than
          simply passing through it.
        </p>

        <p>
          This piece was one of the first pieces of research that took place on this land, and it
          reflects one of the core interests we cultivate here at Sentieri: cultural practices that
          retrain attention and open new relationships with land, memory, and ecology.
        </p>

        <p>Below you can listen to the audio and read the full script.</p>

        <h2 className="subheader-l2">Intro</h2>
        <p>
          Thank you for joining this walk. You&rsquo;re holding a piece of another place, three
          images from the site of my research, a hill in Loreto Aprutino, a town close to the
          Apennines in Italy,
        </p>
        <p>
          There dry grasses lean like old storytellers
          <br />
          and the cracked clay soils remember centuries of footsteps.
        </p>

        <h2 className="subheader-l2">Invitation</h2>
        <p>
          I invite you to begin walking with me there&mdash;and here, in Amsterdam, this exhibition,
          your day, this spring.
        </p>
        <p>
          Take this walk as an open-ended inquiry into the geography of the places we cross, even
          you are made up of geographical coordinates that shape the grounds walk while they shape
          you
        </p>

        <h2 className="subheader-l2">Images you carry</h2>
        <p>
          The images you carry are fragments from that landscape. But they are not just from
          there&mdash;they speak to here, too. What does it mean to bring one place into another?
          What stories do they tell, when they meet? Think of these images as clues to a place
          you&rsquo;ve never been, but somehow already know.
        </p>

        <h2 className="subheader-l2">Walk Begins</h2>
        <p>
          This walk begins here&mdash;in this neighbourhood, where this research first took shape.
          It was here, near this space in Amsterdam, where I first walked and asked:
        </p>
        <p>
          <em>Can walking make a place feel more like a &lsquo;we&rsquo;?</em>
        </p>
        <p>
          That question followed me to Loreto, where I walked this time as a newcomer.
        </p>
        <p>In both places, the question remains open, still unfolding.</p>

        <h2 className="subheader-l2">Space as Story</h2>
        <p>
          We begin at the bottom of the gravel driveway. Let your feet settle into a pace. Walk as
          if each step leaves a soft impression on the page of an unfinished book.
        </p>
        <p>
          As you walk, let images unfold past your eyes,
          <br />
          Imagine you are rewriting this part of the city. As you are passing, you&rsquo;re
          composing.
        </p>

        <h2 className="subheader-l2">Now let me tell you a story</h2>
        <p>Now let me tell you a story as you continue to step along.</p>
        <p>
          To your right, the giant thistle, more thorn than flower. It stands like a guardian of
          wilderness. Feral and fierce
        </p>
        <p>
          The thistle was never invited. She arrived unannounced at the edge of the pathway. All
          spikes and stubborn green, she stood her ground through summers that cracked the clay.
        </p>
        <p>
          People passed her by. Some called her ugly, some an inconvenient weed, and some cursed her
          prickles when she clung to their socks as they walked.
        </p>
        <p>But the thistle knew her place.</p>
        <p>
          In the patience of droughts, she shaded the soil. Her roots held the earth when rain came
          too fast. When no one noticed, she hosted dozens of bees who whispered to her the most
          secret wisdom.
        </p>
        <p>
          One morning, a child walking alone saw her glowing violet in the golden light. The child
          stopped, bent low, and said, &ldquo;You look like a queen.&rdquo;
        </p>
        <p>The thistle did not reply. But that spring, she returned&mdash;taller.</p>
        <p>
          As you continue to walk, focus on a crack in the pavement, a stone or an architectural
          detail, something that insists on being seen. What if that object were to talk?
        </p>
        <p>I invite you to note down your thoughts on the back of one of your images</p>

        <h2 className="subheader-l2">Walking as Inquiry</h2>
        <p>
          In Loreto, I walked with people, games and with the land. As I asked some of my walking
          companions, I now ask you to join me for a game of archaeological excavations. As you
          continue to move across space, see if you can collect one or more things that catch your
          attention.
        </p>
        <p>Go on pick them up&mdash;it can be anything, organic or inorganic.</p>
        <p>
          Maybe you ended up with more than one thing, and you feel like arranging them somewhere,
          take a pause.
        </p>
        <p>There you have your artefact</p>
        <p>
          Think of this object in relation to space you are right now, how did it look 100 years
          ago? Yesterday? This winter?
        </p>
        <p>And your object&mdash;what time does it belong to?</p>
        <p>What purpose could it serve?</p>
        <p>
          Take one the images and on the back draw your artefact in whatever way you can.
        </p>
        <p>A shape. A line. A texture. A note.</p>
        <p>Now imagine this artefact has never been seen before.</p>
        <p>
          Give it a name&mdash;
          <br />
          not what it is, but what it feels like. Note it down
        </p>
        <p>As you walk, keep it in mind.</p>

        <h2 className="subheader-l2">The Rural and the Imagined</h2>
        <p>
          Coming from the city, I arrived in Loreto carrying assumptions like luggage&mdash;about
          the rural, about my place as an artist there, about the appearance of stillness
        </p>
        <p>
          Its temporality isn&rsquo;t slower; it&rsquo;s cyclical.
          <br />
          Its politics not absent, but sedimented&mdash;layered in land use, migration, weather,
          tradition.
        </p>
        <p>Take another one of your images. Hold it in your hand.</p>
        <p>Now, look around you.</p>
        <p>
          Overlay the two landscapes&mdash;the one you&rsquo;re in, and the one you&rsquo;re
          carrying.
          <br />
          Let one talk to the other.
        </p>
        <p>
          Hold the printed image next to the scene. If you can, take a photo!
        </p>

        <h2 className="subheader-l2">Guidebooking</h2>
        <p>
          Imagined the first map of this place was drawn by someone who had no paper.
        </p>
        <p>
          She walked with pockets full of dry seeds and a ribbon of clay trailing from her boots.
          <br />
          Each time the wind brushed her hair, she made a turn.
          <br />
          Each time a bird sang twice, she stopped to listen.
        </p>
        <p>
          By the end of her walk, the map was not a line on a page,
          <br />
          but a memory cramped into the folds of her coat,
          <br />
          a rhythm carried in her feet.
        </p>
        <p>
          Here, today in this space&mdash;this space of making, of gathering, of assembling parts
          into something whole&mdash;you hold your own page. A blank sheet.
        </p>
        <p>Take a moment.</p>
        <p>
          Think back to three points from your walk&mdash;
          <br />
          Not where you went, but where something caught you.
        </p>
        <p>
          A shift in sound.
          <br />
          A stranger&rsquo;s gesture.
          <br />
          A thought that stayed behind like a footprint.
        </p>
        <p>Mark them down.</p>
        <p>
          Draw, write, list, sketch, scribble. Let it be intuitive.
        </p>
        <p>
          This is your map. A fragment of place&mdash;not just where you were,
        </p>
        <p>
          Thank you for walking.
        </p>
        <p>
          You&rsquo;ve been part of a small act of place-making&mdash;not just through the streets
          of this neighbourhood, but across distance and imagination.
        </p>
        <p>
          This walk wasn&rsquo;t only about movement. It was about listening. About tuning your
          senses toward what is often overlooked. These are the anecdotal edges where meaning lives.
          They don&rsquo;t shout, but they endure.
        </p>
        <p>
          In my research, I explore how walking becomes a method. A way of knowing that begins in
          the body, that trusts attention, that follows intuition like a thread across time.
          It&rsquo;s not just about going somewhere. It&rsquo;s about how you arrive. What you
          notice. What you carry forward.
        </p>
        <p>
          When we walk, we move through more than space&mdash;we move through stories.
        </p>
        <p>
          The stories are what make a place. They root us. They connect us. They shift the way we
          see.
        </p>
        <p>
          In Loreto Aprutino, I walk to understand a landscape in transformation&mdash;a farm
          becoming a site of regeneration, me, a newcomer, becoming a part of a place. In Amsterdam,
          I walked to ask: can shared steps bring people closer? Today, those questions are met here.
        </p>
        <p>
          Walking as research matters because it allows us to slow down, to resist pre-determined
          narratives. It teaches us that knowledge can begin with feeling. That places are not
          fixed&mdash;they are made in relation.
        </p>
        <p>
          And that maybe, in walking, we are making something too: a future that listens better. A
          space that holds more voices.
        </p>
        <p>
          So thank you&mdash;for your steps, for your noticing, for placing a place with me today.
        </p>
        <p>
          You&rsquo;re invited to return to the exhibition space and leave a mark&mdash;an image, a
          sentence, a scrap of a map.
        </p>
        <p><em>Author&mdash;Giulia Morlando</em></p>
      </>
    ),
    images: [
      { url: '/images/articles/a-walk-from-elsewhere/Walk_with_image-5.jpg', alt: 'A path through the countryside near Loreto Aprutino' },
      { url: '/images/articles/a-walk-from-elsewhere/Walk_with_image-1.jpg', alt: 'Wildflowers and thistles on the hill' },
      { url: '/images/articles/a-walk-from-elsewhere/Walk_with_image-2.jpg', alt: 'Ruins reclaimed by nature' },
      { url: '/images/articles/a-walk-from-elsewhere/Walk_with_image-3.jpg', alt: 'Thistle in bloom at golden hour' },
      { url: '/images/articles/a-walk-from-elsewhere/Walk_with_image-4.jpg', alt: 'Tree shadows on a warm wall' },
    ],
  },
  {
    title: 'A Case for Fertile Grounds',
    slug: 'a-case-for-fertile-grounds',
    publishDate: '2025-02-01',
    featuredImage: '/images/articles/a-case-for-fertile-ground/a_case_for_fertile_ground-2.jpg',
    entity: 'sogni',
    author: 'Rebecca Douglass',
    content: (
      <>
        <p>
          The site of Sentieri presents a fruitfully curious contradiction. This emerging
          agricultural venture is simultaneously at the beginning of something new, whilst standing
          on a land that holds so much past. It aims to be both a blank slate - a testing grounds
          for novel ways of co-habitation and co-creation - whilst also calling upon a legacy of
          passed-down knowledge on working in tandem with the land, that has kept its regal olive
          groves, winding vineyards and prolific forest standing for umpteen decades. What kind of
          high-yielding knowledge can be harvested from this intersection? How can we look back to
          look forward?
        </p>

        <p>
          Once begun, such questions spill out in great flurries - what do we gain from remembering,
          who is given the chance to weave the legacy of place, what do we even mean when we talk of
          &lsquo;place&rsquo;, and what tools do we need to talk about the &lsquo;future&rsquo; in
          such an ecologically ravaged present? - a rippling flood of enquiry that underscores my
          upcoming research taking place on-site at Sentieri in Spring 2026. As a kind of jumping
          off point from such a slew of questioning, I have felt pulled towards the versatile phrase
          &lsquo;Fertile Ground&rsquo;. Residing in a state of &lsquo;before&rsquo;, awaiting
          renovation and in the midst of being returned to an agriculturally productive state,
          Sentieri offers a multidimensional meaning to the word fertile. Working with fertile land,
          at a fertile moment, is charged with playful potential. Here we have the opportunity to
          dream and practice possible futures, using methods of storytelling, skill exchange and
          walking as research to speculate collaboratively with both the human and more-than-human
          characters that populate this place. Inversely, this is also a fertile moment to prepare
          for impending nightmares, playing with the politics of &lsquo;prepping&rsquo;, survival
          and fringe community building. This article serves as a moment of long-distance dreaming,
          recalling memories of Sentieri so far and entangling them with the methods and theories I
          plan to put to use during my residency.
        </p>

        <p>
          In late July 2025 I was bundled up the bumpy driveway of Sentieri for my inaugural visit.
          Rain was forecast for the following day, and to my disappointment, the forecast - as they
          often do - came true. Rain on this, my first day of a long awaited Italian Summer getaway.
          Rain so heavy that as it licked down the walls of Sentieri&rsquo;s stoney facade, it crept
          through the old window panes, drooling onto the tiled floors in slow puddles. We spent a
          few hours shuffling around soft furnishings, and rolling rags to create semi-efficient
          water barriers. And, after the interior had been sufficiently secured, we took several
          coffees and shelter under the portico to look out at the sullen clouds steamrolling across
          the hills. A damp squib Summer? No, not quite. That sodden landscape, plants bowing and
          bending under immense droplets, was a source of relief to the permanent residents at
          Sentieri, who had been staring with despair at a topography turning to dust; ground
          cracking, vines receding, land unworkable for weeks on end.
        </p>

        <p>
          What Sentieri&rsquo;s co-founders, carers and co-habitors Jack and Giulia exemplified
          through their empathy with the dampened scenery was their developed ability to shed
          personal desires in favour of a way of living symbiotically with the land. My desires for
          a long, hot Italian Summer would reduce this landscape to what anthropologist Tim Ingold
          observes as a &ldquo;neutral, external backdrop to human activit[y].&rdquo; Through months
          of embodied interactions with their new home, Jack and Giulia had been attuning to place
          as a complex tapestry of stories, signs and micro-lives that can be read, comprehended and
          responded to. This, Ingold would say, is a &ldquo;&lsquo;dwelling
          perspective&rsquo;&rdquo; whereby landscape is a pulsating record that holds traces of the
          past, urgencies of the present and hints towards the future, constantly unfurling, mixing
          and changing - fertile ground.
        </p>

        <p>
          Of course, this is by no means a newfound mode of living; it is the way agricultural
          workers have been living with the land for millennia. Beyond the hegemony of the modern
          Gregorian calendar in the Western world, many farmers, communities, and sometimes even
          entire countries align their sense of time to an entirely different rhythm - that of the
          agricultural calendar, descending into even more specificity depending on the produce of
          the land. It is this unique rhythm and repeated patterns of events that, through his
          theory of <em>Rhythmanalysis</em>, the philosopher Henry Lefebvre would declare makes
          &lsquo;Sentieri&rsquo; Sentieri - our intrinsic sense of place is made apparent though a
          constant process of repeating yet varied rhythms that penetrate daily life.
        </p>

        <p>
          It follows that, if I am to unearth the stories of Sentieri, entangling myself with the
          specificities of a routine, rhythm, reality that has pulsed through this verdant hill for
          centuries, then I must play Lefebvre&rsquo;s game of <em>Rhythmanalysis</em>, sinking into
          the peculiarities of daily life that define Sentieri. This is where the field of walking
          as artistic research practice stumbles into frame. Place, rhythmically established as per
          Lefebvre, fits the narrative of walking researchers like me; that as we march through
          place, we might choose to attune ourselves to familiar rhythms to track patterns of
          behaviour in place or purposefully become arrhythmic to shake the foundations of
          familiarity and see what emerges. And so, the humble stroll becomes a powerful tool of
          investigation; a way to encounter Sentieri as a living archive, a rich palimpsest upon
          which we might read layers of time, histories, memories, and multispecies happenings,
          valuing textures, smells, temperatures, and sounds - fragments of place that exist in
          excess of traditional archives.
        </p>

        <p>
          This upcoming residency is an expansion of my research project &lsquo;<em>Drift Matter:
          Walking Towards an Anarchive of Place</em>&rsquo; conducted as part of my Artistic
          Research Master&rsquo;s at the University of Amsterdam. Through this research, I used
          walking as a primary artistic research methodology as a way to attune to place, turning my
          attention outwards and documenting the frequencies, shifts, and multisensorial happenings
          that constitute our idea of place, yet are sidelined in the ever-more motorised and fast
          paced modernity. These findings, I hypothesised, constitute what we can call <em>anarchive
          of place</em> - a term borrowed from the back pocket of Derrida, and repurposed as a
          radical form of fieldwork that provokes us to stay critical of the regime of the archive,
          and to constantly envision the archive anew. The anarchive is a responsibility towards the
          future of place, permitting speculation, play, and dreaming from the voices of human and
          more-than-human &lsquo;anarchivists&rsquo;.
        </p>

        <p>
          This continuing body of research is somewhat of a love letter to the work of Stephanie
          Springgay and Sarah Truman, who in their collaborative research project{' '}
          <em>Walking Methodologies in a More-than-Human World</em> (2017) posit walking as an
          anarchival technology that attends to the undocumented, affective, and fragmented
          compositions that tell stories about a past that is not past but is the present and an
          imagined future. Expanding on my previous project, at Sentieri I will be adding to my
          lexicon of anarchival technologies methods of listening, storytelling, and agricultural
          skill sharing, making a case that these tools can also permit a kind of attunement to
          undocumented aspects of place, multiplying and diversifying the content of my anarchive.
        </p>

        <p>
          Nighttime at Sentieri is serenaded in by a pack of neighbourhood pups singing together -
          howling across their respective hills and regaling the stories they&rsquo;ve collected
          from a day of tramping through each consecutive patch of farmland. They slip through
          fences making a joke of our human desire to create impenetrable boundaries. They adopt me
          as one of their own, trotting me through the olive grove with winding and seemingly
          irrational pathways. They appear at the foot of the entrance stairwell with a regularity
          that presents no rhyme or reason. This motley crew of canines are a hive of meaning
          making, and this memory of our shared unexpected adventures captures the spirit of my
          upcoming research.
        </p>

        <p>
          They are expert storytellers, populating the sonic landscape of Abruzzo with their
          dreamlike yowls. They alert me to how the legacy of Sentieri is sensorially abundant - the
          sound of dogs still echoes in my ears, even as I sit in a metropolitan Amsterdam cafe
          clacking away at my keyboard. As does the beat of the chopping board, the chug of the
          Transporter 2500, gurgling bottles of wine over dinner, crackling fires every other night.
          Of course, beyond the sonic footprint, Sentieri is bursting with flavour, curious smells,
          and tactile delights for the fingertips. The story of Sentieri is rich across the senses;
          any future-thinking anarchive must account for such multisensorial experiences of place.
        </p>

        <p>
          The unabashed ease with which they burst through boundaries, fences, gates and open front
          doors is a source of great fascination. To these trespassing dogs, abiding by the laws of
          private land or impassable buildings demarcated by a map is pups-play. They reveal
          top-down cartography to be a farce. I think of the ambulatory Surrealists walking through
          a sultry post-war Paris in experiments of &lsquo;deambulation&rsquo; or
          &lsquo;derives&rsquo;. The Surrealists constructed counter-cartographies of liquid cities,
          walking, dreaming, and drifting through the sea between dense archipelagos of actions,
          populating the &lsquo;in-between&rsquo; with action and reaction. This liquidical
          exploration provokes thoughts of further slipping beneath the surface, breaking the kind
          of up-down dualism of cartographies. In my time at Sentieri, I hope to contribute to a
          different kind of cartography - one that explores place as a fluctuating occurrence - and
          engaging with a kind of learning about how to write about landscape in a way that stretches
          beyond the observational.
        </p>

        <p>
          As is the case before the researcher departs on a residency - and as is evident in this
          verdant article - my dreams, ideas and plans are blossoming in their abundance, spilling
          out in great florets, branching at every opportunity, and splaying their networks of roots
          ever-outwards. The task at hand is to capture this abundance without restraint, to find
          modes of presentation that permit a moveable and multisensorial experience with the past,
          present and future of Sentieri. By god, this is no simple feat. And yet, with each visit
          to the stone house on top of the crumbling driveway I better understand that this project
          with Sentieri is by no means bound to a single residency. Rather, what I, they, we are
          undertaking is a lifelong entanglement with land-based ideas; a prolonged dream of
          possible futures. I therefore approach this residency confident that, set within the
          distinct rhythms of Sentieri, my research has an abundance of time, space and fertile
          ground to grow.
        </p>

        <h2 className="subheader-l2">References</h2>
        <p>
          Ingold, Tim. &ldquo;The Temporality of the Landscape.&rdquo; <em>World Archaeology</em>,
          vol. 25, no. 2, Oct. 1993, pp. 152&ndash;174
        </p>
        <p>
          Springgay, Stephanie, and Sarah E. Truman. <em>Walking Methodologies in a More-Than-Human
          World: WalkingLab</em>. Milton, Taylor and Francis, 2017.
        </p>
        <p>
          Thorpe, Holly. &ldquo;Natural Disaster Arrhythmia and Action Sports: The Case of the
          Christchurch Earthquake.&rdquo; <em>International Review for the Sociology of Sport</em>,
          vol. 50, no. 3, 20 May 2013, pp. 301&ndash;325.
        </p>

        <p><em>Author&mdash;Rebecca Douglass</em></p>
      </>
    ),
    images: [
      { url: '/images/articles/a-case-for-fertile-ground/a_case_for_fertile_ground-3.jpg', alt: 'Dry grasses at Sentieri' },
      { url: '/images/articles/a-case-for-fertile-ground/a_case_for_fertile_ground-2.jpg', alt: 'Poppies growing from cracked earth' },
      { url: '/images/articles/a-case-for-fertile-ground/a_case_for_fertile_ground-1.jpg', alt: 'Objects hanging from an olive tree' },
      { url: '/images/articles/a-case-for-fertile-ground/a_case_for_fertile_ground-4.jpg', alt: 'Nighttime gathering at Sentieri' },
    ],
  },
  {
    title: 'The Dining Table',
    slug: 'the-dining-table',
    publishDate: '2025-03-01',
    featuredImage: '/images/articles/the-dining-table/the-dining-table-1.jpg',
    entity: 'sogni',
    author: 'Rebecca Douglass',
    content: (
      <>
        <p>Sentieri houses a handful of tables.</p>

        <p>
          There&rsquo;s the small and only ever so slightly rectangular one that hosts most of the
          action. Its popularity can most likely be attributed to its prime location. One can take a
          coffee, indulge in a pasta-laden lunch post morning farm duties, or pass the evenings with
          a glass of local wine whilst drinking up phenomenal views of rippling hills, birds, trees,
          even a castle! And, nestled under the stone portici, all this can be achieved once removed
          from any sticky, hot sun, sudden rain or raging storm. Here notebooks have been splayed
          open and filled with gleeful ease, inspiration from conversations, flavours and sights
          flooding onto the pages. We&rsquo;ve digested meals of such simple splendor made from
          vegetables plucked from the garden a mere 15 metres from our seat. Here we&rsquo;ve sat in
          silence at 6am - silence between companions that is rare but when arrives is so beautiful
          and comforting it makes the early mornings seem like a welcome gift.
        </p>

        <p>
          There&rsquo;s the round one tucked quietly in the corner of the living room, dressed with
          table runners, laptops and piles of paper plans. I was there when we hauled this table out
          from the 5th floor apartment of a local nonna, emptying her home in preparation for moving
          to the city, and generously giving away what was no longer needed. Passing through hands,
          there&rsquo;s a legacy of dinnertime memories inscribed in the fabric of this table. Her
          drawn-out meals with friends, family, or alone; her grand ideas, her writing, thinking,
          planning - all of this somehow lives between the cracks on the surface.
        </p>

        <p>
          Quite unmissable is the heavy duty wooden ox that commandeers the kitchen. Rarely used for
          sitting (in fact, I&rsquo;ve not seen it accompanied by a chair) this sturdy relic absorbs
          the impact of the culinary happenings at Sentieri. The surface boasts great bowls of
          freshly picked tomatoes, plums, peppers, basil that are replenished by the second.
          Multiple hands wipe, chop, scratch, grab, push, pull to the rhythm of the day&rsquo;s
          designated chef, table taking it all in with ease.
        </p>

        <p>
          Less conventionally, there&rsquo;s the fold-out plastic table. What it lacks in visual
          charm it makes up for in convivial potential, accompanying every spontaneous barbeque or
          bonfire; lightweight and eager to prop up plates of uncooked meats and bottles of beers,
          observing them diminish as the night draws longer, the embers burn brighter and voices get
          louder.
        </p>

        <p>
          And there&rsquo;s likely ones I&rsquo;ve missed, either for sake of time or (most
          probably) because there are just too many to remember.
        </p>

        <p>
          What this article is not is a descriptive catalogue of Sentieri&rsquo;s many surfaces. I
          feel compelled to spotlight the humble table as an ode to the importance of something a lot
          more significant than home furnishings. Spending time here on residency or as part of the
          harvesting team secures you a seat at the dining table, a cornerstone of Sentieri&rsquo;s
          mission - to create a community working towards innovative creative research that occurs in
          tandem with the activity and produce of the surrounding land; to find moments, places,
          environments in which the sharing of ideas, visions for the futures, and (of course)
          amazing food allows for a kind of practising of alternative modes of living and creating.
        </p>

        <p>
          As our world steams towards unstoppable avarice, and the pace of daily existence becomes
          unlivable, our commitment to nourishment begins to crumble. As such, eating together
          becomes a rarity. The food collective Tabili highlights that as the act of eating together
          disappears, so too does the table: and so we witness &ldquo;the disappearance of human
          connection, cultural expression, exchange, and the feeling of belonging to a collective or
          group&rdquo;. I noticed this shift in my own life when my parents began serving family
          dinners at the small kitchen island, craning up at the TV that hailed over the small
          eating station instead of staring across at familiar faces. Suddenly, our dining room
          became an untouchable shrine, its purpose almost entirely erased. The gentle art of
          reanimating our days through stories over plates of mash potato and beans had vanished. So
          too had the awkward silences, arguments, and family announcements; frequencies that attune
          you to the precise moment in which you are living, forging your memories and forming your
          personality.
        </p>

        <p>
          Before this gets too sentimental, what I am trying to point towards is how important the
          table is to what Sentieri is setting out to achieve. In my weeks spent at the farm, I have
          never eaten alone - it&rsquo;s almost impossible. If you decide to make lunch, you&rsquo;re
          tasked with announcing this to the 3, 4, 10 others that might be working away on some
          corner of the land. One pot becomes 3, 2 hands becomes 10 as you are joined in the
          industrial task of preparing a meal for many. Inspiration strikes from whichever vegetables
          line the wooden table, still bearing the mud stains from being freshly plucked from the
          ground outside the window. Chairs are found from god-knows where and suddenly there you
          are, sitting shoulder to shoulder with the temporary residents of Sentieri. Where you might
          weave tales of the direction of your creative research - the colours of fabrics, the shapes
          of words - your neighbour might regale you with the well-being of the vineyard. The
          boundary between cultural and agricultural practices becomes blurred at this exact moment,
          each bleeding into the other and influencing the direction of your next step after the
          plates are cleared away.
        </p>

        <p>
          Tasting and touching the land upon which I am researching, thinking and creating influences
          the outcome of my work. Sentieri encourages an environment in which we intentionally
          dedicate time to eating at the table, nurturing the temporary community that emerges here
          at any given moment, and practising an alternative to our otherwise high-pace lives in the
          city; slowing down and connecting to people and place.
        </p>

        <p>
          All the activities, interactions and foods that have coloured my time at Sentieri over the
          past year are transformed into relics that I can hold with me when they are recounted and
          relived at the dinner table. When I want to reflect on my research, I cannot do this
          without first thinking of which table I was sitting at when I had that great idea, or what
          meal I was eating when I finally realised the direction I wanted to take. Somehow, each
          table - whether it be plastic, painted, busted or busy - holds the potential for novel
          avenues of creating, so go on - pull up a chair.
        </p>

        <p><em>Author&mdash;Rebecca Douglass</em></p>
      </>
    ),
    images: [
      { url: '/images/articles/the-dining-table/the-dining-table-1.jpg', alt: 'Herbs and greens on the wooden table at Sentieri' },
      { url: '/images/articles/the-dining-table/the-dining-table-2.jpg', alt: 'View of Sentieri from the hill' },
    ],
  },
]

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getArticlesByEntity(entity: 'stelle' | 'sogni'): ArticleData[] {
  return articles.filter((a) => a.entity === entity)
}

export function getEntityBySlug(slug: string): 'stelle' | 'sogni' {
  const article = articles.find((a) => a.slug === slug)
  if (article) return article.entity
  return 'stelle'
}
