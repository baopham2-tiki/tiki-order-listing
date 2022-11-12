import React, { useEffect } from 'react';

const detail = () => {
    const detail = useSelector(state => state.detail);
    console.log(detail);
    const detail = useSelector(state => state.detail.data);

    useEffect(() => {
        axios
            .get('https://api.tala.xyz/v2/me/orders/221696256?include=items,price_summary,child_orders,status_histories', {
                headers: {
                    'x-access-token':
                        'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2Njc5MDA0NDYsImV4cCI6MTY2ODA3MzI0NiwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.UQDV8aSHenERoBAuRJP-iWLU8rFW_OL625q47Yn4FQ1ZvMdzZa8Fe6DHk2PNWL-HEChxK5GRh2C3zinE4VBgJUteJSAGRg7JqHue0vkAzX1B12wU3IhX5mAW_nG-_efY5fpJ1wW_FYzlZLgvPAQwzYaArnAsQw-qzZyuM0HPrBoSh3QYRFEpFIpsx1-ISRAbZTddDp6UTvkyDcsDTECPBxRMOZWFuVUnqKoqhwxAZKYR9fb_nDWx17IhXaP4KpUuPMCKMFqsTXyD1tfTGU0U9bN5pGoOOoUJ-nBZuESJeOWzTfxpmkdT6B05EgenkvVE5uA6jBh2kzeqnolSM7MSEJL649YQMlXFhlz7szzRoxYcrqbFGnCsOqyY9Wv1EsW60UFyyl-05PdwHulW63YhpBgJN96n1tNvZMxk2AsyxCpqtHmmqMtZXI-kwIgBFkJ96FrSz3VkziNftBLl3w2yUEB4GZ8tw0EZNZg13jjwm0OeICGSjq2c6ANBnuCp6EKMnmp52EKNkZSTiW7BT-nghwKh5oJynzKZPfV1XmulEe8bOb1X9doZiC0L3hCIs4-OTJYDhO0BcHvqAgqyvZrciY0JOlNs9GcvGkkDTRt0c3a3J2-ezUqnM_aLyCWoH2_Vs2OxZuMTUXsTdkb6_rwN_6udttAGn9gAvy9YdY_rxIo',
                },
            })
            .then((response) => {
                console.log(response.data.data)
                dispatch(getOrders(response.data.data))
            })
            .catch((error) => {
                console.log(error)
            })
    })
    return (
        <div>

        </div>
    );
};

export default detail;