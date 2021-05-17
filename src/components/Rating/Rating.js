import React, { memo } from "react"
import { AiFillStar } from "react-icons/ai"
const x = {
  hello: "xin chao",
}
x.hello = "nihao"
function Rating({ star = 5, setX }) {
  let ratingArray = [...new Array(star)]
  console.log("rating is rerendering ...")
  return (
    <div>
      {ratingArray.map((rate, index) => (
        <span key={index}> {<AiFillStar className="star" />} </span>
      ))}
    </div>
  )
}
console.log(x)
// THINKING : Do i really need this memo() ?
export default memo(Rating)
