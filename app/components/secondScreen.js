export default function SecondScreen () {
    return(
        <div className="twoScreen" tabIndex="2" id='about'>
            <div className='max-[750px]:hidden grid-cols-subgrid col-span-2'></div>
            <div className='aboutTitle'>
                <img className='fingerprint' src='./fingerprint.svg' />
                <div className='nameAbout'>ابوالفضل جمشیدی؟!</div>
            </div>
            <div className='max-[750px]:hidden grid-cols-subgrid col-span-1'></div>
            <div className='aboutText'>
            سلام! <br/>
                 من ابوالفضلم و 19 سالَمه؛ <b>عاشقِ دنیایِ خلق‌کردنی‌ها</b> هستم.  توی هنرستان نرم‌افزار خوندم و در ادامه‌اش برای کشفِ بیش‌تر، <span className="font-hasti text-[30px]">الآن یک فرانت اند دولپراَم</span>. <br/>
                خلق کردن برای من یک لذت خاصه اما نه به هر قیمتی! برای ابوالفضل فقط ساختن یه پروژه کافی نیست؛ چیزی که مهمه ارزش اون کاره و البته اون کار باید روح، حس، معنا و توانایی ارتباط گرفتن داشته باشه و ارزش خودش رو در این قالب ها نشون بده و حرف بزنه. <br/>
                 اگر فکر می‌کنی توی این مسیر کمکی از من برمیاد، درخدمتم! 
                <b>بیا گپ بزنیم.</b>
            </div>
            <div>
                <img className="signJTen" src='./jtenSign.svg' />
            </div>
            <div className="arrowDown grid-cols-subgrid col-span-2 max-[750px]:hidden">
                <a href='#contact'><img src='./chevrons-down.svg' /></a>
            </div>
        </div>
    )
}