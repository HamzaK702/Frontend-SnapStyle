const API_BASE_URL = process.env.REACT_APP_API_URL; // Ensure you have your base URL

export const addOriginAddress = async (id, addressData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/order/addOriginAddress/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addressData),
    });

    if (!response.ok) {
      throw new Error('Failed to add origin address: ' + response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;  
  }
};

export const addDestinationAddress = async (id, addressData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/order/addDestinationAddress/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addressData),
    });

    if (!response.ok) {
      throw new Error('Failed to add destination address: ' + response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};