//デバッグのフラグ
const DEBUG = false;

let drawCount = 0;
let fps = 0;
let lastTime = Date.now();

//スムージング
const SMOOTHING = false;

//ゲームスピード
const GAME_SPEED = 1000/60;

//画面サイズ
const SCREEN_W = 280;
const SCREEN_H = 340;

//キャンバスサイズ
const CANVAS_W = SCREEN_W * 2;
const CANVAS_H = SCREEN_H * 2;

//フィールドサイズ
const FIELD_W = SCREEN_W + 40;
const FIELD_H = SCREEN_H + 40;

//星の数
const STAR_MAX = 300;
