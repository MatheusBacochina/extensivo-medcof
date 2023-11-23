import Image from "next/image"
import Link from "next/link"
const Footer = () => {
    return <div className="py-4 mt-20 flex justify-center bg-black">
        <Link href="https://www.reclameaqui.com.br/empresa/medcof-concursos/?utm_source=referral&utm_medium=embbed&utm_campaign=reputacao&utm_term=horizontal">
        <Image width={150} height={50} src="/selo.webp" alt="logo medcof" />
        </Link>
    </div>
}

export default Footer