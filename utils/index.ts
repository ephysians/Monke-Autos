// import { Car } from "@/types";


// export async function fetchCars(model: string): Promise<Car[]> {
//   const apiKey = "wG+8hVeUofeVV1+HnGvt+w==02UrIrsndaq5fTMb";
//   const url = `https://api.api-ninjas.com/v1/cars?model=${model}`;

//   function handleError(error: unknown): void {
//     if (error instanceof Error) {
//       console.error("Error:", error.message);
//     } else {
//       console.error("Unknown error:", error);
//     }
//   }

//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "X-Api-Key": apiKey,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data: Car[] = await response.json();
//     return data;
//   } catch (error) {
//     handleError(error);
//     throw error;
//   }
// }


import { Car } from "@/types";

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
