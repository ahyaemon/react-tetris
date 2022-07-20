export enum Command {
    Up,
    Right,
    Down,
    Left,
    RotationLeft,
    RotationRight,
    Hold,

    // FIXME ゲームに対するコマンドと、画面に対するコマンドを分ける
    Back,
    NewGame,
    Retry,
}
