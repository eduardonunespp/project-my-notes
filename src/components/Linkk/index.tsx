import { Linkk } from "./styles"
import { Icon } from "./styles";


interface linkProps {
    link: string;
    colorIcon: string;
}



export function ComponentLink({link, colorIcon}: linkProps){
    return (
        <Linkk>



        <Icon className="Icon" colorIcon={colorIcon} />
        
        <a href="">{link}</a>
        
        </Linkk>
    )
}







