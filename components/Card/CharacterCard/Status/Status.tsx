import Image, {StaticImageData} from 'next/image';
import {CharacterStatusType} from 'assets/api/rick-and-morty-api';

type Props={
    status:CharacterStatusType
    src:StaticImageData
}
export const Status=(props:Props)=>{
    const {status,src}=props
    return(
        <>
            <Image src={src} alt={''} width={20} height={20}/>
        </>
    )
    
}