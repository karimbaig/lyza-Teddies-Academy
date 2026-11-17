export const SITE = {
  name: "Lyza's Teddies Academy",
  tagline: "Learn. Play. Grow.",
  phone: "+44 7845 589174",
  phoneHref: "tel:+447845589174",
  address: "Unit 5, Laybourne House, Admirals Way, London E14 9UH",
  hours: "Monday – Friday · closes 6 pm",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lyza%27s+Teddies+Academy+Admirals+Way+London+E14+9UH",
  mapEmbed: "https://www.google.com/maps?q=Admirals+Way,+London+E14+9UH&output=embed",
  rating: "5.0",
  reviewCount: 6,
};

export const REVIEWS = [
  { name: "Nicky B", when: "a month ago", text: "Liza has been looking after my daughter for the past two years, and she is truly a wonderful childminder. She always keeps me updated on my daughter's development, the activities they do, and their outdoor adventures. It is reassuring to know she is in such caring hands." },
  { name: "Manel Kouadri", when: "a month ago", text: "Liza is absolutely lovely, and my son loved her from the moment he met her. She is so warm, caring and attentive, and I always feel completely reassured knowing he is in her care. She is brilliant at keeping me updated throughout the day." },
  { name: "Teodora Macari", when: "a month ago", text: "We highly recommend Lyza's Teddies Academy! Our son Matteo has been attending for a year, and we have nothing but praise for Liza and the wonderful care she provides." },
  { name: "Daniela Vicol", when: "a month ago", text: "We had a wonderful experience with Lisa. My son was always very happy in her care, and he felt comfortable, safe and familiar around her. Lisa is very attentive, caring and patient with the children." },
  { name: "Imtinan Ali Khan", when: "a month ago", text: "Great experience with Lyza's Teddies Academy. It has been a lovely place for my 8-month-old baby, with a caring and friendly environment. Very happy with the experience." },
  { name: "Khari Clarke", when: "a month ago", text: "Our girl (1.5 year old) has grown and learned so much in her time at Lyza's Teddy Academy. Very happy to have her in a safe, learning environment!" },
];

export const PROGRAMMES = [
  { name: "Little Cubs", age: "3 months – 2 years", text: "A gentle, nurturing space where babies and toddlers are cared for with warmth and love. Sensory play, music, and first words come alive here.", tone: "bubble" },
  { name: "Creative Explorers", age: "2 – 3 years", text: "Art, messy play, and early mark-making ignite creativity. Children develop confidence, social skills, and a love for self-expression.", tone: "sky" },
  { name: "Pre-School Pioneers", age: "3 – 7 years", text: "School readiness through phonics, numeracy, and outdoor adventures. We build curious, resilient learners ready for their next chapter.", tone: "butter" },
] as const;

export const FAQS = [
  { q: "Do you offer flexible childcare?", a: "Yes. We offer hourly bookings and term-time-only places. Contact us to discuss the childcare arrangements your family needs." },
  { q: "What ages do you care for?", a: "We welcome children from 3 months to 7 years, grouped into Little Cubs (3 months – 2 years), Creative Explorers (2 – 3 years) and Pre-School Pioneers (3 – 7 years)." },
  { q: "Where are you located?", a: "We are at Unit 5, Laybourne House, Admirals Way, London E14 9UH — in the heart of Canary Wharf, close to transport links for busy working families." },
  { q: "What are your opening hours?", a: "We are open Monday to Friday and close at 6 pm. Call us on +44 7845 589174 to talk through drop-off times that suit your family." },
  { q: "Which curriculum do you follow?", a: "We follow the Early Years Foundation Stage (EYFS) framework, enhanced with Montessori and Reggio Emilia-inspired practice so every child learns through curiosity and play." },
  { q: "Are meals included?", a: "Yes. We serve a fresh, balanced and varied weekly menu following DfE early years nutrition guidance, and we carefully follow each child's allergy and dietary plan. You can see the full menu on our Menu page." },
  { q: "How do you keep children safe?", a: "Secure entry, CCTV monitoring and DBS-checked, paediatric first-aid trained staff give you complete peace of mind every day." },
  { q: "How will I know how my child is doing?", a: "Parents tell us this is what they love most — we share regular updates on development, activities and outdoor adventures, plus our monthly newsletter." },
  { q: "How do I book a visit?", a: "Call us on +44 7845 589174 or send a message through our Contact page, and we will arrange a time for you and your little one to come and say hello." },
];

export type MenuDay = { day: string; tone: string; meals: { label: string; dish: string; second?: string }[] };
export const MENU: MenuDay[] = [
  { day: "Monday", tone: "bubble", meals: [
    { label: "Breakfast", dish: "Porridge made with milk; mashed banana." },
    { label: "Morning snack", dish: "Pear slices and low-salt oatcakes." },
    { label: "Lunch", dish: "Chicken and vegetable casserole with brown rice.", second: "Plain yoghurt and soft peach." },
    { label: "Afternoon snack", dish: "Cucumber sticks, yoghurt dip and wholemeal toast fingers." },
    { label: "Tea", dish: "Spinach and cheese frittata with new potatoes.", second: "Soft tomato pieces and ripe fruit." },
  ]},
  { day: "Tuesday", tone: "sky", meals: [
    { label: "Breakfast", dish: "Scrambled egg on wholemeal toast with soft tomato." },
    { label: "Morning snack", dish: "Plain yoghurt with mashed blueberries." },
    { label: "Lunch", dish: "Lentil and vegetable bolognese with wholewheat pasta.", second: "Steamed broccoli and apple slices." },
    { label: "Afternoon snack", dish: "Banana and unsalted rice cakes." },
    { label: "Tea", dish: "Salmon and sweet potato fish pie with peas.", second: "Plain yoghurt and soft berries." },
  ]},
  { day: "Wednesday", tone: "butter", meals: [
    { label: "Breakfast", dish: "Low-sugar wholegrain cereal with milk and pear." },
    { label: "Morning snack", dish: "Soft apple slices and wholemeal toast strips." },
    { label: "Lunch", dish: "Beef and vegetable shepherd's pie.", second: "Plain yoghurt and seasonal fruit." },
    { label: "Afternoon snack", dish: "Cheese strips, cucumber and a low-salt oatcake." },
    { label: "Tea", dish: "Mild chickpea and spinach curry with brown rice.", second: "Cucumber raita." },
  ]},
  { day: "Thursday", tone: "mint", meals: [
    { label: "Breakfast", dish: "Overnight oats with milk, stewed apple and cinnamon." },
    { label: "Morning snack", dish: "Banana and unsalted rice cakes." },
    { label: "Lunch", dish: "Baked cod with mashed potato and green beans.", second: "Plain yoghurt and soft fruit." },
    { label: "Afternoon snack", dish: "Wholemeal mini pitta, soft vegetable sticks and yoghurt dip." },
    { label: "Tea", dish: "Chicken and vegetable wholewheat couscous.", second: "Soft pear and plain yoghurt." },
  ]},
  { day: "Friday", tone: "lilac", meals: [
    { label: "Breakfast", dish: "Wholemeal pancakes (no added sugar) with berries and plain yoghurt." },
    { label: "Morning snack", dish: "Pear slices and plain oatcakes." },
    { label: "Lunch", dish: "Mild three-bean chilli with brown rice.", second: "Avocado and tomato mash with fruit." },
    { label: "Afternoon snack", dish: "Cheese on wholemeal toast fingers with cucumber." },
    { label: "Tea", dish: "Vegetable and cheese pasta bake with broccoli.", second: "Plain yoghurt and berries." },
  ]},
];

export const MENU_NOTES = {
  babies: "Each baby needs an individual feeding plan agreed with parents. Breast milk or first infant formula continues alongside solids. Introduce solids when the baby shows readiness, then adapt texture gradually (smooth, mashed, soft lumps and safe finger foods) to the child's development. From around 10 months, lunch and tea should each have a main and an additional dish. Babies under 12 months do not need snacks; offer an extra milk feed if hungry. For drinks under 12 months, offer breast milk, first infant formula and water. Do not use cow's milk as the main drink before 12 months. No honey before 12 months.",
  safe: [
    "Fresh drinking water is available throughout the day; for children aged 1+, we offer plain milk and water only.",
    "We aim for 3 portions of milk/unsweetened dairy foods daily, counting food provided at home. Full-fat dairy under age 2; lower-fat options introduced gradually after age 2.",
    "Portions are adjusted to each child's appetite and children are never pressured to finish.",
    "A full-course paediatric first-aid-trained staff member is always in the room while children eat.",
    "Textures and cutting are adapted for each child: small round foods quartered lengthways, bones removed, no whole nuts, whole seeds, popcorn or raw jelly cubes for under-5s.",
    "Likely allergens in these recipes include milk, egg, fish and cereals containing gluten. We check every recipe and supplier label, prevent cross-contact and follow each child's allergy/dietary plan.",
  ],
};


export const CHILDCARE = {
  flexible: "We offer very flexible childcare, from hourly bookings to term-time-only places. We understand parents and families cannot be superheroes all the time, so our flexible childcare is an extra helping hand for tough times.",
  individual: "We enable children to become independent learners who value learning with and from others, and help them develop a positive attitude to education.",
  principles: [
    "Give children time to reflect, practise and learn with no sense of failure.",
    "Encourage a positive attitude towards themselves and others, with a strong sense of self-respect.",
    "Provide a high-quality, broad and challenging curriculum based on learning through play, with regard to the Early Years Foundation Stage.",
    "Build on children's personal interests and stage of development, encouraging their true potential in all areas of learning.",
    "Combine the security, happiness, comfort and care of home with the stimulation, learning and social awareness of a professionally run group experience.",
    "Develop policies and procedures that support a high-quality Early Years curriculum.",
    "Use a range of teaching approaches to extend our understanding of how children learn.",
    "Provide a happy, safe and stimulating environment where children, parents, carers and visitors feel welcomed and valued.",
    "Invite parents and carers to work in partnership with us, nurturing enthusiasm for learning and celebrating children's achievements.",
    "Help children respect other people's property, ideas and beliefs, irrespective of gender, race, disability or academic achievement.",
    "Respond to the needs of children and families in the local community.",
    "Work within a framework that enables inclusion for all children and families.",
  ],
  listening: [
    "Observe and learn from what children say and do.",
    "Strive to understand the other person's point of view.",
    "Respect the experiences of others.",
    "Create a shared dialogue and learn from one another.",
    "Be an open and willing learner.",
  ],
  pillars: [
    { title: "Intent", text: "Our goal is to wow, inspire and nourish young minds. Not literally, of course — that's what our meals take care of!" },
    { title: "Impact", text: "We measure success by smiles, 'aha!' moments, and the occasional joyful 'look, I did it!' dance." },
    { title: "Implementation", text: "We blend a pinch of traditional learning with a whole lot of hands-on fun." },
  ],
};
