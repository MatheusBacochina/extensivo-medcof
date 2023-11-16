import { ReactNode } from "react"

const Bg = ({logo}: {logo: ReactNode}) => {
    return <div className="snowflakes absolute inset-0 overflow-hidden opacity-20 -z-10" aria-hidden="true">
    <div className="snowflake text-white">
    {logo}
    </div>
    <div className="snowflake text-white">
    {logo}
    </div>
    <div className="snowflake text-white">
    {logo}
    </div>
    <div className="snowflake text-white">
    {logo}
    </div>
    <div className="snowflake text-white">
    {logo}
    </div>
    <div className="snowflake text-white">
    {logo}
    </div>
    <div className="snowflake text-white">
    {logo}
    </div>
    <div className="snowflake text-white">
    {logo}
    </div>
    <div className="snowflake text-white">
    {logo}
    </div>
    <div className="snowflake text-white">
    {logo}
    </div>
  </div>
}

export default Bg