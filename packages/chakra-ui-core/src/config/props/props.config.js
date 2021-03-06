import { system } from 'styled-system'
/**
 * This configuration is meant for the intent of:
 *  - creating new custom properties for certian styled props
 *  - creating shorthand properties for some long attribute names.
 */
export const config = {
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii'
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii'
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii'
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii'
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii'
  },
  d: {
    property: 'display'
  },
  w: {
    property: 'width',
    scale: 'sizes'
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes'
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  h: {
    property: 'height',
    scale: 'sizes'
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  bgImg: {
    property: 'backgroundImage'
  },
  bgImage: {
    property: 'backgroundImage'
  },
  bgSize: {
    property: 'backgroundSize'
  },
  bgPos: {
    property: 'backgroundPosition'
  },
  bgRepeat: {
    property: 'backgroundRepeat'
  },
  pos: {
    property: 'position'
  },
  flexDir: {
    property: 'flexDirection'
  },
  shadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  b: {
    property: 'border',
    scale: 'borders'
  },
  bl: {
    property: 'borderLeft',
    scale: 'borders'
  },
  bt: {
    property: 'borderTop',
    scale: 'borders'
  },
  br: {
    property: 'borderRight',
    scale: 'borders'
  },
  bb: {
    property: 'borderBottom',
    scale: 'borders'
  },
  textDecoration: {
    property: 'textDecoration'
  },
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  letterSpacing: true,
  fill: {
    property: 'fill',
    scale: 'colors'
  },
  stroke: {
    property: 'stroke',
    scale: 'colors'
  },
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: {
    property: 'backgroundAttachment'
  },
  outline: true,
  float: true,
  willChange: true,
  bgAttachment: {
    property: 'backgroundAttachment'
  },
  textDecor: {
    property: 'textDecoration'
  },
  listStylePos: true,
  listStyleImg: true,
  accelerator: true,
  alignmentBaseline: true,
  all: true,
  animationDelay: true,
  animationDirection: true,
  animationDuration: true,
  animationFillMode: true,
  animationIterationCount: true,
  animationName: true,
  animationPlayState: true,
  animationTimingFunction: true,
  aspectRatio: true,
  audioLevel: true,
  azimuth: true,
  backdropFilter: true,
  backfaceVisibility: true,
  backgroundBlendMode: true,
  backgroundClip: true,
  backgroundOrigin: true,
  backgroundPositionX: true,
  backgroundPositionY: true,
  backgroundRepeatX: true,
  backgroundRepeatY: true,
  baselineShift: true,
  baselineSource: true,
  behavior: true,
  blockEllipsis: true,
  blockSize: true,
  blockStep: true,
  blockStepAlign: true,
  blockStepInsert: true,
  blockStepRound: true,
  blockStepSize: true,
  bookmarkLabel: true,
  bookmarkLevel: true,
  bookmarkState: true,
  borderBlock: true,
  borderBlockColor: true,
  borderBlockEnd: true,
  borderBlockEndColor: true,
  borderBlockEndStyle: true,
  borderBlockEndWidth: true,
  borderBlockStart: true,
  borderBlockStartColor: true,
  borderBlockStartStyle: true,
  borderBlockStartWidth: true,
  borderBlockStyle: true,
  borderBlockWidth: true,
  borderBoundary: true,
  borderCollapse: true,
  borderEndEndRadius: true,
  borderEndStartRadius: true,
  borderImage: true,
  borderImageOutset: true,
  borderImageRepeat: true,
  borderImageSlice: true,
  borderImageSource: true,
  borderImageWidth: true,
  borderInline: true,
  borderInlineColor: true,
  borderInlineEnd: true,
  borderInlineEndColor: true,
  borderInlineEndStyle: true,
  borderInlineEndWidth: true,
  borderInlineStart: true,
  borderInlineStartColor: true,
  borderInlineStartStyle: true,
  borderInlineStartWidth: true,
  borderInlineStyle: true,
  borderInlineWidth: true,
  borderSpacing: true,
  borderStartEndRadius: true,
  borderStartStartRadius: true,
  boxDecorationBreak: true,
  boxSnap: true,
  breakAfter: true,
  breakBefore: true,
  breakInside: true,
  bufferedRendering: true,
  captionSide: true,
  caret: true,
  caretColor: true,
  caretShape: true,
  chains: true,
  clear: true,
  clip: true,
  clipPath: true,
  clipRule: true,
  colorAdjust: true,
  colorInterpolation: true,
  colorInterpolationFilters: true,
  colorProfile: true,
  colorRendering: true,
  colorScheme: true,
  columnCount: true,
  columnFill: true,
  columnGap: true,
  columnProgression: true,
  columnRule: true,
  columnRuleColor: true,
  columnRuleStyle: true,
  columnRuleWidth: true,
  columnSpan: true,
  columnWidth: true,
  columns: true,
  contain: true,
  containIntrinsicSize: true,
  content: true,
  contentVisibility: true,
  continue: true,
  counterIncrement: true,
  counterReset: true,
  counterSet: true,
  cue: true,
  cueAfter: true,
  cueBefore: true,
  direction: true,
  displayAlign: true,
  dominantBaseline: true,
  elevation: true,
  emptyCells: true,
  enableBackground: true,
  fillBreak: true,
  fillColor: true,
  fillImage: true,
  fillOpacity: true,
  fillOrigin: true,
  fillPosition: true,
  fillRepeat: true,
  fillRule: true,
  fillSize: true,
  filter: true,
  flexFlow: true,
  floatDefer: true,
  floatOffset: true,
  floatReference: true,
  floodColor: true,
  floodOpacity: true,
  flow: true,
  flowFrom: true,
  flowInto: true,
  font: true,
  fontDisplay: true,
  fontFeatureSettings: true,
  fontKerning: true,
  fontLanguageOverride: true,
  fontOpticalSizing: true,
  fontPalette: true,
  fontSizeAdjust: true,
  fontStretch: true,
  fontSynthesis: true,
  fontSynthesisSmallCaps: true,
  fontSynthesisStyle: true,
  fontSynthesisWeight: true,
  fontVariant: true,
  fontVariantAlternates: true,
  fontVariantCaps: true,
  fontVariantEastAsian: true,
  fontVariantEmoji: true,
  fontVariantLigatures: true,
  fontVariantNumeric: true,
  fontVariantPosition: true,
  fontVariationSettings: true,
  footnoteDisplay: true,
  footnotePolicy: true,
  forcedColorAdjust: true,
  gap: true,
  glyphOrientationHorizontal: true,
  glyphOrientationVertical: true,
  grid: true,
  gridColumnEnd: true,
  gridColumnStart: true,
  gridRowEnd: true,
  gridRowStart: true,
  gridTemplate: true,
  hangingPunctuation: true,
  hyphenateCharacter: true,
  hyphenateLimitChars: true,
  hyphenateLimitLast: true,
  hyphenateLimitLines: true,
  hyphenateLimitZone: true,
  hyphens: true,
  imageOrientation: true,
  imageRendering: true,
  imageResolution: true,
  imeMode: true,
  inherits: true,
  initialLetter: true,
  initialLetterAlign: true,
  initialLetterWrap: true,
  initialValue: true,
  inlineSize: true,
  inlineSizing: true,
  inputFormat: true,
  inset: true,
  insetBlock: true,
  insetBlockEnd: true,
  insetBlockStart: true,
  insetInline: true,
  insetInlineEnd: true,
  insetInlineStart: true,
  isolation: true,
  kerning: true,
  layoutFlow: true,
  layoutGrid: true,
  layoutGridChar: true,
  layoutGridLine: true,
  layoutGridMode: true,
  layoutGridType: true,
  leadingTrim: true,
  lightingColor: true,
  lineBreak: true,
  lineClamp: true,
  lineGrid: true,
  lineHeightStep: true,
  lineIncrement: true,
  linePadding: true,
  lineSnap: true,
  listStyle: true,
  marginBlock: true,
  marginBlockEnd: true,
  marginBlockStart: true,
  marginBreak: true,
  marginInline: true,
  marginInlineEnd: true,
  marginInlineStart: true,
  marginTrim: true,
  marker: true,
  markerEnd: true,
  markerKnockoutLeft: true,
  markerKnockoutRight: true,
  markerMid: true,
  markerOffset: true,
  markerPattern: true,
  markerSegment: true,
  markerSide: true,
  markerStart: true,
  marks: true,
  mask: true,
  maskBorder: true,
  maskBorderMode: true,
  maskBorderOutset: true,
  maskBorderRepeat: true,
  maskBorderSlice: true,
  maskBorderSource: true,
  maskBorderWidth: true,
  maskClip: true,
  maskComposite: true,
  maskImage: true,
  maskMode: true,
  maskOrigin: true,
  maskPosition: true,
  maskPositionX: true,
  maskPositionY: true,
  maskRepeat: true,
  maskSize: true,
  maskSourceType: true,
  maskType: true,
  maxBlockSize: true,
  maxInlineSize: true,
  maxLines: true,
  maxZoom: true,
  minBlockSize: true,
  minInlineSize: true,
  minZoom: true,
  mixBlendMode: true,
  motion: true,
  motionOffset: true,
  motionPath: true,
  motionRotation: true,
  navDown: true,
  navIndex: true,
  navLeft: true,
  navRight: true,
  navUp: true,
  offset: true,
  offsetAnchor: true,
  offsetBlockEnd: true,
  offsetBlockStart: true,
  offsetDistance: true,
  offsetInlineEnd: true,
  offsetInlineStart: true,
  offsetPath: true,
  offsetPosition: true,
  offsetRotate: true,
  offsetRotation: true,
  orientation: true,
  orphans: true,
  outlineColor: true,
  outlineOffset: true,
  outlineStyle: true,
  outlineWidth: true,
  overflowAnchor: true,
  overflowBlock: true,
  overflowClipMargin: true,
  overflowInline: true,
  overscrollBehavior: true,
  overscrollBehaviorBlock: true,
  overscrollBehaviorInline: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  paddingBlock: true,
  paddingBlockEnd: true,
  paddingBlockStart: true,
  paddingInline: true,
  paddingInlineEnd: true,
  paddingInlineStart: true,
  page: true,
  pageBreakAfter: true,
  pageBreakBefore: true,
  pageBreakInside: true,
  pageOrientation: true,
  paintOrder: true,
  pause: true,
  pauseAfter: true,
  pauseBefore: true,
  penAction: true,
  perspective: true,
  perspectiveOrigin: true,
  perspectiveOriginX: true,
  perspectiveOriginY: true,
  pitch: true,
  pitchRange: true,
  placeContent: true,
  placeItems: true,
  placeSelf: true,
  playDuring: true,
  propertyName: true,
  quotes: true,
  regionFragment: true,
  rest: true,
  restAfter: true,
  restBefore: true,
  richness: true,
  rotate: true,
  rowGap: true,
  rubyAlign: true,
  rubyMerge: true,
  rubyOverhang: true,
  rubyPosition: true,
  running: true,
  scale: true,
  scrollBehavior: true,
  scrollMargin: true,
  scrollMarginBlock: true,
  scrollMarginBlockEnd: true,
  scrollMarginBlockStart: true,
  scrollMarginBottom: true,
  scrollMarginInline: true,
  scrollMarginInlineEnd: true,
  scrollMarginInlineStart: true,
  scrollMarginLeft: true,
  scrollMarginRight: true,
  scrollMarginTop: true,
  scrollPadding: true,
  scrollPaddingBlock: true,
  scrollPaddingBlockEnd: true,
  scrollPaddingBlockStart: true,
  scrollPaddingBottom: true,
  scrollPaddingInline: true,
  scrollPaddingInlineEnd: true,
  scrollPaddingInlineStart: true,
  scrollPaddingLeft: true,
  scrollPaddingRight: true,
  scrollPaddingTop: true,
  scrollSnapAlign: true,
  scrollSnapCoordinate: true,
  scrollSnapDestination: true,
  scrollSnapMargin: true,
  scrollSnapMarginBottom: true,
  scrollSnapMarginLeft: true,
  scrollSnapMarginRight: true,
  scrollSnapMarginTop: true,
  scrollSnapPointsX: true,
  scrollSnapPointsY: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  scrollSnapTypeX: true,
  scrollSnapTypeY: true,
  scrollbarArrowColor: true,
  scrollbarBaseColor: true,
  scrollbarColor: true,
  scrollbarDarkShadowColor: true,
  scrollbarDarkshadowColor: true,
  scrollbarFaceColor: true,
  scrollbarGutter: true,
  scrollbarHighlightColor: true,
  scrollbarShadowColor: true,
  scrollbarTrackColor: true,
  scrollbarWidth: true,
  scrollbar3DLightColor: true,
  scrollbar3DlightColor: true,
  shapeImageThreshold: true,
  shapeInside: true,
  shapeMargin: true,
  shapeOutside: true,
  shapeRendering: true,
  size: true,
  snapHeight: true,
  solidColor: true,
  solidOpacity: true,
  spatialNavigationAction: true,
  spatialNavigationContain: true,
  spatialNavigationFunction: true,
  speak: true,
  speakAs: true,
  speakHeader: true,
  speakNumeral: true,
  speakPunctuation: true,
  speechRate: true,
  stopColor: true,
  stopOpacity: true,
  stress: true,
  stringSet: true,
  supportedColorSchemes: true,
  syntax: true,
  tabSize: true,
  tableLayout: true,
  textAlignAll: true,
  textAlignLast: true,
  textAnchor: true,
  textAutospace: true,
  textCombineUpright: true,
  textDecorationBlink: true,
  textDecorationColor: true,
  textDecorationLine: true,
  textDecorationLineThrough: true,
  textDecorationNone: true,
  textDecorationOverline: true,
  textDecorationSkip: true,
  textDecorationSkipBox: true,
  textDecorationSkipInk: true,
  textDecorationSkipInset: true,
  textDecorationSkipSelf: true,
  textDecorationSkipSpaces: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textDecorationUnderline: true,
  textEdge: true,
  textEmphasis: true,
  textEmphasisColor: true,
  textEmphasisPosition: true,
  textEmphasisSkip: true,
  textEmphasisStyle: true,
  textGroupAlign: true,
  textIndent: true,
  textJustify: true,
  textJustifyTrim: true,
  textKashida: true,
  textKashidaSpace: true,
  textLineThrough: true,
  textLineThroughColor: true,
  textLineThroughMode: true,
  textLineThroughStyle: true,
  textLineThroughWidth: true,
  textOrientation: true,
  textOverline: true,
  textOverlineColor: true,
  textOverlineMode: true,
  textOverlineStyle: true,
  textOverlineWidth: true,
  textRendering: true,
  textSizeAdjust: true,
  textSpaceCollapse: true,
  textSpaceTrim: true,
  textSpacing: true,
  textUnderline: true,
  textUnderlineColor: true,
  textUnderlineMode: true,
  textUnderlineOffset: true,
  textUnderlinePosition: true,
  textUnderlineStyle: true,
  textUnderlineWidth: true,
  textWrap: true,
  touchAction: true,
  touchActionDelay: true,
  transformBox: true,
  transformOriginX: true,
  transformOriginY: true,
  transformOriginZ: true,
  transformStyle: true,
  transitionDelay: true,
  transitionDuration: true,
  transitionProperty: true,
  transitionTimingFunction: true,
  translate: true,
  ucAltSkin: true,
  ucSkin: true,
  unicodeBidi: true,
  unicodeRange: true,
  userZoom: true,
  vectorEffect: true,
  viewportFill: true,
  viewportFillOpacity: true,
  viewportFit: true,
  voiceBalance: true,
  voiceDuration: true,
  voiceFamily: true,
  voicePitch: true,
  voiceRange: true,
  voiceRate: true,
  voiceStress: true,
  voiceVolume: true,
  volume: true,
  widows: true,
  wordBoundaryDetection: true,
  wordBoundaryExpansion: true,
  wordSpacing: true,
  wordWrap: true,
  wrapAfter: true,
  wrapBefore: true,
  wrapFlow: true,
  wrapInside: true,
  wrapThrough: true,
  writingMode: true,
  x: true,
  y: true,
  zoom: true
}

config.bgAttachment = config.backgroundAttachment
config.textDecor = config.textDecoration
config.listStylePos = config.listStylePosition
config.listStyleImg = config.listStyleImage

const styledConfig = system(config)

export default styledConfig
