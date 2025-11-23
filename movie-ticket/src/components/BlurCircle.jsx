
const BlurCircle = ({top , left="auto", right , bottom = "auto"}) => {

  return(
    <div className="absolute -z-50 h-58 w-58 aspect-square
    rounded-full  bg-[rgba(248,68,101,0.25)] blur-3xl" 
      style={{top: top, left: left, right: right, bottom: bottom}}>

    </div>
  )
}

export default BlurCircle