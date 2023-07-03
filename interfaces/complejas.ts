(() => {
  interface Client {
    name: string;
    age: number;
    // address?: {
    //   id: number;
    //   zip: string;
    //   city: string;
    // };
    address: Address;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Paco",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
  };
})();
