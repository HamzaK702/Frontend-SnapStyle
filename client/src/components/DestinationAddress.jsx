import AddressForm from './Address';
import { useDispatch, useSelector } from "react-redux";
import { setOriginAddress, setHitOriginAddressApi } from '../state';
import { setDestinationAddress } from '../state';

function DestinationAddressPage() {
  const dispatch = useDispatch();
  const destination = useSelector((state) => state.auth.destination); 
  const handleDispatchAction = (AddressData) => {
    dispatch(setDestinationAddress({ destinationAddress: AddressData }));
  };

  return <AddressForm 
            formTitle="Where will we deliver your items?"
            apiUrl="/order/addDestinationAddress"
            onSuccessNavigateTo="/order/reviewAddress"
            country={destination}
            dispatchAction={handleDispatchAction}
            heading="Destination Address"
          />;
}

export default DestinationAddressPage;