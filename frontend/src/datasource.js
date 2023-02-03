export const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={"https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "isAdmin",
      headerName: "IsAdmin",
      width: 100,
    },
  ];

export const userRows = [
  {
    id:1,
    username:"pippo",
    email:"email",
    isAdmin:"true"
  },
  {
    id:2,
    username:"pippo",
    email:"email",
    isAdmin:"true"
  },
  {
    id:3,
    username:"pippo",
    email:"email",
    isAdmin:"true"
  },

]
  
export const hotelColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    {
      field: "title",
      headerName: "Title",
      width: 230,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "rooms",
      headerName: "Camere",
      width: 100,
    },
  ];

  export const hotelRows = [
    {
      id:1,
      name:"pippo",
      type:"email",
      title:"Best!",
      city:"true",
      rooms:2
    },
  ];