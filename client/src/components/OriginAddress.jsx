// Origin Address Page Component
import AddressForm from './Address';
import { useDispatch, useSelector } from "react-redux";
import { setOriginAddress, setHitOriginAddressApi } from '../state';

function OriginAddressPage() {
  const dispatch = useDispatch();
    
  const origin = useSelector((state) => state.auth.origin); 
  const handleDispatchAction = (AddressData) => {
    dispatch(setOriginAddress({ originAddress: AddressData }));
  };

 

  return <AddressForm 
            formTitle="Where will we pick-up your items?"
            apiUrl="/order/addOriginAddress"
            onSuccessNavigateTo="/order/address/destinationAddress"
            country={origin}
            dispatchAction={handleDispatchAction}
            heading="Collection Address"
             
          />;
}

export default OriginAddressPage;