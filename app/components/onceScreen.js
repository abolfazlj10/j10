export default function OnceScreen () {
    return(
        <div className="oneScreen" tabIndex="1" id='home'>
            <div className="gridSystemOneScreen max-[750px]:hidden">
                <div className='grid-cols-subgrid col-span-7'></div>
                <div className='max-[1330px]:hidden grid-rows-subgrid col-span-1 row-span-3'></div>
                <div className='containerMainContent'>
                    <div className='titleHeading'>
                        <div className="flex flex-col">
                            <div className="subTitle text-highGray mr-auto max-[820px]:mr-0 -mb-6">برنامه‌نویس </div>
                            <div className="text-lowGray">ابوالفضل</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex-1 opacity-0 select-none">.</div>
                            <div className="text-highGray mr-16">جمشیدی</div>
                            <div className="subTitle text-lowGray -mt-5  mr-auto">فرانت‌اند</div>
                        </div>
                    </div>
                    <div className='containerTwoIcon'>
                        <img className="w-[150px] max-[1330px]:w-[150px] opacity-0 select-none" src='./havij.png'/>
                        <img className="w-[150px] max-[1330px]:w-[150px] opacity-0 select-none" src='./havij.png'/>
                    </div> 
                    <div className='spaceImageMain'>
                        <div className="relative">
                            <div className="coverContainer"></div>
                            <img className='Image' src='./jten.png'/>
                        </div>
                    </div>            
                </div>
                <div className='max-[1330px]:hidden grid-rows-subgrid col-span-1 row-span-3'></div>
            </div>
            <div className="arrowDown max-[750px]:hidden">
                <a href='#about'><img src='./chevrons-down.svg' /></a>
            </div>
            <div className="containerMobileOnceScreen min-[750px]:hidden">
                <div className="titleMobile">
                    <div className="text-highGray">ابوالفضل</div>
                    <div className="text-lowGray">جمشیدی</div>
                </div>
                <div className='spaceImageMainMobile'>
                    <div className="coverContainerMobile"></div>
                    <img className='ImageMobile' src='./jten.png'/>
                </div>  
                <div className="subtextMobile">
                    <div className="text-highGray">برنامه‌نویس </div>
                    <div className="text-lowGray">فرانت‌اند</div>
                </div>   
            </div>
        </div>
    )
}