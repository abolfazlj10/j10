export default function ThirdScreen () {
    return(
        <div className="thirdScreen" tabIndex="3" id='contact'>
            <div className='flex'>
            <img className='likeIcon' src='./like.png' />
            <div className='connectMe'>ارتباط با من</div>
            </div>
            <div className='socialMediaLinks'>
            <div className='containerLinks'>
                <div className='text-[#D44638] blob'><a href='mailto:abolfazljamshidi101010@gmail.com'>جیمیل</a></div>
                <div className='blob min-[750px]:-mr-10'><a className="instagramLink" href='https://www.instagram.com/abolfazl_j10'>اینستاگرام</a></div>
                <div className='blob text-[#0A66C2] min-[750px]:-mr-10 max-[750px]:-ml-40 max-[750px]:-mt-10'><a href='https://www.linkedin.com/in/abolfazljamshidi/'>لینکدین</a></div>
            </div>
            <div className='containerLinks'>
                <div className='text-[#0088CC] blob min-[750px]:-mt-20 max-[750px]:-mt-32 max-[750px]:-mr-24'><a href='https://t.me/Abolfazl_jamshidi10'>تلگرام</a></div>
                <div className='text-lowGray blob min-[750px]:-mt-20 min-[750px]:-mr-10 max-[750px]:-mr-20 max-[750px]:-mt-5'><a href='https://github.com/abolfazlj10'>گیت هاب</a></div>
                <div className='text-[#000] blob min-[750px]:-mt-10 min-[750px]:-mr-10 max-[750px]:-mr-5'><a href='http://twitter.com/abolfazl_j10'>ایکس</a></div>
            </div>
            </div>
            <div className='flex justify-center max-[750px]:hidden'><a href='https://ma-mu.vercel.app/'><img src='./desginer.svg'/></a></div>
        </div>
    )
}
