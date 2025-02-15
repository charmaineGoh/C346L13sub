const API_URL = 'https://data.gov.sg/api/action/datastore_search?resource_id=d_5d6d714a58d9ff3911135b31e57deb33';

export const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const records = data.result.records;

        // Group data by artform
        const groupedData = records.reduce((acc, item) => {
            const { artform, year, companies } = item;
            if (!acc[artform]) {
                acc[artform] = [];
            }
            acc[artform].push({ year, companies });
            return acc;
        }, {});


        return Object.keys(groupedData).map(artform => ({
            artform,
            years: groupedData[artform],
        }));
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
