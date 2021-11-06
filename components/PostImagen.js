import Image from 'next/image'

export default function PostImagen({slug}) {
    return (
        <Image width= "340" height= "200" objectFit="cover" alt="" className="img-fluid" src={slug} />
    )
}