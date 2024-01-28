sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(5000)
})
let _44: Sprite = null
scene.setBackgroundImage(assets.image`myImage0`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . f f e 4 1 f d d f 1 4 e f . . 
    f d f f e 4 d d d d 4 e f f . . 
    f b f e f 4 4 4 4 4 4 4 4 f . . 
    f b f 4 f 4 4 4 4 4 4 4 f . . . 
    f c f . f 4 4 4 4 4 4 f . . . . 
    . f f . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
game.showLongText("esquiver les noix de coco", DialogLayout.Bottom)
info.setLife(3)
mySprite.setPosition(80, 105)
controller.moveSprite(mySprite, 40, 0)
mySprite.setStayInScreen(true)
game.setGameOverEffect(false, effects.dissolve)
game.setGameOverPlayable(false, music.melodyPlayable(music.bigCrash), false)
game.onUpdateInterval(500, function () {
    _44 = sprites.create(assets.image`myImage1`, SpriteKind.Projectile)
    _44.setPosition(randint(-100, 1000), randint(1, 1000))
    _44.setVelocity(0, 50)
})
game.onUpdateInterval(500, function () {
    _44 = sprites.create(assets.image`myImage1`, SpriteKind.Projectile)
    _44.setPosition(randint(-100, 100), randint(1, 100))
    _44.setVelocity(0, 50)
})
