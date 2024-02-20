/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconItem = ({item}) => {
  
    return(
  
      <div  style={{backgroundColor: item.color}}>
      <FontAwesomeIcon icon={['fab', item.icon]}  />
      
      <span>{item.toolkit}</span>
    </div>
  )
  }

  export default IconItem;