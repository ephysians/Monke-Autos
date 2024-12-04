import { Car, CarProps,   } from "@/types";

interface FetchCarsResponse {
  cars: Car[]; // Successful car data
  message?: string; // Optional error message
}

export async function fetchCars(model: string): Promise<FetchCarsResponse> {
  const apiKey = "wG+8hVeUofeVV1+HnGvt+w==02UrIrsndaq5fTMb";
  const url = `https://api.api-ninjas.com/v1/cars?model=${model}`;

  function handleError(error: unknown): void {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Car[] = await response.json();

    // Check if the data is empty and return a message if it is
    if (data.length === 0) {
      return { cars: [], message: "No cars found for the model." };
    }

    return { cars: data }; // Successful response
  } catch (error) {
    handleError(error);
    return { cars: [], message: "Failed to fetch cars." }; // Return an error message
  }
}

export const calculateServiceCost = (city_mpg: number, year: number) => {
  const basePricePerDay = 95705; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// export const calculateServiceCost = (city_mpg: number, year: number, mileage: number) => {
//   const baseServiceFee = 100; // Base service fee in dollars
//   const mileageFactor = 0.02; // Cost per mile driven
//   const ageFactor = 10; // Additional cost per year of vehicle age

//   // Calculate additional charges based on mileage and age
//   const mileageCharge = mileage * mileageFactor;
//   const ageCharge = (new Date().getFullYear() - year) * ageFactor;

//   // Calculate total service cost
//   const totalServiceCost = baseServiceFee + mileageCharge + ageCharge;

//   return totalServiceCost.toFixed(2); // Return cost rounded to 2 decimal places
// };

// export const calculateServiceCost = (city_mpg: number, year: number, mileage: number) => {
//   const baseServiceFee = 95705; // Base service fee in dollars
//   const mileageFactor = 0.02; // Cost per mile driven
//   const ageFactor = 10; // Additional cost per year of vehicle age
//   const mpgFactor = 5; // Additional cost for lower city MPG (penalizes inefficient cars)

//   // Calculate additional charges
//   const mileageCharge = mileage * mileageFactor;
//   const ageCharge = (new Date().getFullYear() - year) * ageFactor;
//   const mpgCharge = city_mpg < 25 ? (25 - city_mpg) * mpgFactor : 0; // Penalty for MPG below 25

//   // Calculate total service cost
//   const totalServiceCost = baseServiceFee + mileageCharge + ageCharge + mpgCharge;

//   return totalServiceCost.toFixed(2); // Return cost rounded to 2 decimal places
// };





// export const updateSearchParams = (type: string, value: string) => {
//   // Get the current URL search params
//   const searchParams = new URLSearchParams(window.location.search);

//   // Set the specified search parameter to the given value
//   searchParams.set(type, value);

//   // Set the specified search parameter to the given value
//   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

//   return newPathname;
// };

// export const deleteSearchParams = (type: string) => {
//   // Set the specified search parameter to the given value
//   const newSearchParams = new URLSearchParams(window.location.search);

//   // Delete the specified search parameter
//   newSearchParams.delete(type.toLocaleLowerCase());

//   // Construct the updated URL pathname with the deleted search parameter
//   const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

//   return newPathname;
// };

// export async function fetchCars(filters: FilterProps) {
//   const { manufacturer, year, model, limit, fuel } = filters;

//   // Set the required headers for the API request
//   const headers: HeadersInit = {
//     "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   };

//   // Set the required headers for the API request
//   const response = await fetch(
//     `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
//     {
//       headers: headers,
//     }
//   );

//   // Parse the response as JSON
//   const result = await response.json();

//   return result;
// }

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;

//   url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//   url.searchParams.append('make', make);
//   url.searchParams.append('modelFamily', model.split(" ")[0]);
//   url.searchParams.append('zoomType', 'fullscreen');
//   url.searchParams.append('modelYear', `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append('angle', `${angle}`);

//   return `${url}`;
// } 