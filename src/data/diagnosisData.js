export const diagnosisData = {
  meta: {
    title: "垢抜けタイプ診断",
    subtitle: "あなたに似合う魅せ方と美容の優先順位がわかる",
    eyebrow: "Beauty Style Quiz",
    startButton: "診断をはじめる",
    resultLabel: "あなたは",
    resultSuffix: "タイプ",
    restartButton: "もう一度診断する",
    shareButton: "Xで共有する",
    shareTextTemplate:
      "【垢抜けタイプ診断】\n私の結果は{type}タイプでした。\n\nあなたに合う垢抜けの近道は？",
    disclaimer:
      "この診断は美容傾向を楽しく知るためのコンテンツです。肌状態や体質には個人差があります。",
    cta: {
      label: "無料カウンセリングを予約する",
      url: "https://example.com",
      note: "診断結果に合わせて、似合う雰囲気や優先ケアを相談できます。",
    },
  },
  theme: {
    accent: "#d96f9f",
    accentDark: "#a83f70",
    subAccent: "#c7a46a",
  },
  types: [
    { id: "soft", name: "透明感", shortName: "透明", image: "" },
    { id: "glam", name: "華やか", shortName: "華やか", image: "" },
    { id: "natural", name: "抜け感", shortName: "抜け感", image: "" },
    { id: "clean", name: "清潔感", shortName: "清潔", image: "" },
  ],
  categories: {
    mood: "雰囲気、印象、見せ方",
    makeup: "メイク、色、華やかさ",
    hair: "髪型、質感、抜け感",
    care: "肌、生活感、清潔感",
  },
  questions: [
    {
      id: "q1",
      text: "人から言われるとうれしい印象は？",
      options: [
        { id: "A", text: "透明感がある", scores: { soft: 2 }, category: "mood" },
        { id: "B", text: "華やかで目を引く", scores: { glam: 2 }, category: "makeup" },
        { id: "C", text: "自然体でおしゃれ", scores: { natural: 2 }, category: "hair" },
        { id: "D", text: "清潔感があって好印象", scores: { clean: 2 }, category: "care" },
      ],
    },
    {
      id: "q2",
      text: "今いちばん変えたいところは？",
      options: [
        { id: "A", text: "顔全体の明るさ", scores: { soft: 2 }, category: "mood" },
        { id: "B", text: "メイクの印象", scores: { glam: 2 }, category: "makeup" },
        { id: "C", text: "髪型やスタイリング", scores: { natural: 2 }, category: "hair" },
        { id: "D", text: "肌や生活感", scores: { clean: 2 }, category: "care" },
      ],
    },
    {
      id: "q3",
      text: "似合うと言われたい雰囲気は？",
      options: [
        { id: "A", text: "やわらかく上品", scores: { soft: 2 }, category: "mood" },
        { id: "B", text: "写真映えする華やかさ", scores: { glam: 2 }, category: "makeup" },
        { id: "C", text: "頑張りすぎないこなれ感", scores: { natural: 2 }, category: "hair" },
        { id: "D", text: "きちんとして見える安心感", scores: { clean: 2 }, category: "care" },
      ],
    },
    {
      id: "q4",
      text: "朝の支度で一番時間をかけたいのは？",
      options: [
        { id: "A", text: "ベースメイク", scores: { soft: 2 }, category: "mood" },
        { id: "B", text: "アイメイクやリップ", scores: { glam: 2 }, category: "makeup" },
        { id: "C", text: "髪の質感づくり", scores: { natural: 2 }, category: "hair" },
        { id: "D", text: "スキンケアと整える時間", scores: { clean: 2 }, category: "care" },
      ],
    },
    {
      id: "q5",
      text: "買い足すならどれ？",
      options: [
        { id: "A", text: "トーンアップ下地", scores: { soft: 2 }, category: "mood" },
        { id: "B", text: "主役になるリップ", scores: { glam: 2 }, category: "makeup" },
        { id: "C", text: "ヘアオイルやバーム", scores: { natural: 2 }, category: "hair" },
        { id: "D", text: "肌を整えるケア用品", scores: { clean: 2 }, category: "care" },
      ],
    },
    {
      id: "q6",
      text: "今の悩みに近いのは？",
      options: [
        { id: "A", text: "なんとなく顔色が暗く見える", scores: { soft: 2 }, category: "mood" },
        { id: "B", text: "メイクがいつも同じになる", scores: { glam: 2 }, category: "makeup" },
        { id: "C", text: "髪が決まらないと垢抜けない", scores: { natural: 2 }, category: "hair" },
        { id: "D", text: "疲れて見えやすい", scores: { clean: 2 }, category: "care" },
      ],
    },
    {
      id: "q7",
      text: "理想の変化は？",
      options: [
        { id: "A", text: "肌が明るく見える", scores: { soft: 2 }, category: "mood" },
        { id: "B", text: "一気に印象が華やぐ", scores: { glam: 2 }, category: "makeup" },
        { id: "C", text: "抜け感が出ておしゃれに見える", scores: { natural: 2 }, category: "hair" },
        { id: "D", text: "毎日ちゃんとして見える", scores: { clean: 2 }, category: "care" },
      ],
    },
    {
      id: "q8",
      text: "まずプロに相談するなら？",
      options: [
        { id: "A", text: "似合う色や透明感の出し方", scores: { soft: 2 }, category: "mood" },
        { id: "B", text: "メイクの盛り方", scores: { glam: 2 }, category: "makeup" },
        { id: "C", text: "髪型と雰囲気づくり", scores: { natural: 2 }, category: "hair" },
        { id: "D", text: "肌ケアと清潔感の整え方", scores: { clean: 2 }, category: "care" },
      ],
    },
  ],
  results: {
    soft: {
      title: "明るさとやわらかさで印象を変えるタイプ",
      summary:
        "あなたは、強く盛るよりも透明感ややわらかさを整えることで魅力が出やすいタイプです。ベースメイク、色選び、肌の明るさを整えるだけで印象が変わります。",
      action:
        "まずは下地、チーク、リップの色味を見直して、顔全体が明るく見える組み合わせを作りましょう。",
      ctaTitle: "おすすめメニュー",
      ctaText: "似合う色と透明感メイクの方向性を相談するのがおすすめです。",
      matches: ["清潔感", "抜け感"],
    },
    glam: {
      title: "ポイントメイクで一気に華やぐタイプ",
      summary:
        "あなたは、目元やリップなどポイントを効かせると魅力が伝わりやすいタイプです。少しの色や質感で、写真映えする印象に変わります。",
      action:
        "まずは主役にするパーツを1つ決めて、リップ、アイシャドウ、眉のバランスを整えましょう。",
      ctaTitle: "おすすめメニュー",
      ctaText: "印象が変わるポイントメイクの提案を受けるのがおすすめです。",
      matches: ["透明感", "抜け感"],
    },
    natural: {
      title: "髪と質感でこなれて見えるタイプ",
      summary:
        "あなたは、作り込みすぎるよりも髪型や質感で垢抜けるタイプです。ヘアのまとまり、前髪、顔まわりのニュアンスで印象が大きく変わります。",
      action:
        "まずは髪の質感、顔まわり、スタイリング剤を見直して、頑張りすぎない抜け感を作りましょう。",
      ctaTitle: "おすすめメニュー",
      ctaText: "髪型と雰囲気をセットで相談するのがおすすめです。",
      matches: ["華やか", "清潔感"],
    },
    clean: {
      title: "整った清潔感で信頼されるタイプ",
      summary:
        "あなたは、派手な変化よりも肌、眉、髪、服の整い方で印象が上がるタイプです。清潔感が整うと、自然に好印象につながります。",
      action:
        "まずは肌の見え方、眉、髪のまとまりを整えて、疲れて見えないベースを作りましょう。",
      ctaTitle: "おすすめメニュー",
      ctaText: "肌ケアと第一印象づくりを相談するのがおすすめです。",
      matches: ["透明感", "抜け感"],
    },
  },
  tieBreaker: {
    typeCategories: {
      soft: ["mood"],
      glam: ["makeup"],
      natural: ["hair"],
      clean: ["care"],
    },
    fallbackPriority: ["clean", "soft", "natural", "glam"],
  },
};

export default diagnosisData;
