// let title = [0, 1, 2, 3, 4, 5];

let data = [{
  id: "a00",
  title: "Welcome guide",
  noteContent: "abc",
  color: "#000",
  subdata: [{
      id: "a01",
      pid: "a00",
      title: "Salam",
      noteContent: "abc",
      color: "#000",
      subdata: [{
          id: "a01b01",
          pid: "a01",
          title: "Arabic",
          noteContent: "abc",
          color: "#000",
          subdata: [{
            id: "a01b01c01",
            pid: "a01b01",
            title: "qqqqq",
            noteContent: "abc",
            color: "#000",
            subdata: []
          }, {
            id: "a01b01c02",
            pid: "a01b01",
            title: "rrr",
            noteContent: "abc",
            color: "#000",
            subdata: []
          }, {
            id: "a01b01c03",
            pid: "a01b01",
            title: "khkh",
            noteContent: "abc",
            color: "#000",
            subdata: []
          }]
        },
        {
          id: "a01b02",
          pid: "a01",
          title: "Urdu",
          noteContent: "abc",
          color: "#000",
          subdata: []
        },
        {
          id: "a01b03",
          pid: "a01",
          title: "Sasa",
          noteContent: "abc",
          color: "#000",
          subdata: []
        },
        {
          id: "a01b04",
          pid: "a01",
          title: "Fafa",
          noteContent: "abc",
          color: "#000",
          subdata: []
        }
      ]
    },
    {
      id: "a02",
      pid: "a00",
      title: "Hello",
      noteContent: "abc",
      color: "#000",
      subdata: [{
        id: "a02b01",
        pid: "a02",
        title: "aaa",
        noteContent: "abc",
        color: "#000",
        subdata: []
      }, {
        id: "a02b02",
        pid: "a02",
        title: "ssss",
        noteContent: "abc",
        color: "#000",
        subdata: []
      }]
    },
    {
      id: "a03",
      pid: "a00",
      title: "Go",
      noteContent: "abc",
      color: "#000",
      subdata: [{
        id: "a03b01",
        pid: "a03",
        title: "gggg",
        noteContent: "abc",
        color: "#000",
        subdata: []
      }]
    },
    {
      id: "a04",
      pid: "a00",
      title: "Yay",
      noteContent: "abc",
      color: "#000",
      subdata: []
    }
  ]
}];

// let title = {
//   a00: ["na",
//     {
//       id: "a00",
//       title: "Welcome",
//       color: "#000"
//     },
//     {
//       id: "a01",
//       title: "Salam",
//       color: "#000"
//     },
//     {
//       id: "a02",
//       title: "Hello",
//       color: "#000"
//     },
//     {
//       id: "a03",
//       title: "Go",
//       color: "#000"
//     },
//     {
//       id: "a04",
//       title: "Yay",
//       color: "#000"
//     }
//   ],
//   a01: ["a00",
//     {
//       id: "a01",
//       title: "Salam",
//       color: "#000"
//     },
//     {
//       id: "a01b01",
//       title: "Arabic",
//       color: "#000"
//     },
//     {
//       id: "a01b02",
//       title: "Urdu",
//       color: "#000"
//     },
//     {
//       id: "a01b03",
//       title: "Sasa",
//       color: "#000"
//     },
//     {
//       id: "a01b04",
//       title: "Fafa",
//       color: "#000"
//     }
//   ],
//   a02: ["a00",
//     {
//       id: "a02",
//       title: "Hello",
//       color: "#000"
//     },
//     {
//       id: "a02b01",
//       title: "aaa",
//       color: "#000"
//     },
//     {
//       id: "a02b02",
//       title: "ssss",
//       color: "#000"
//     }
//   ],
//   a03: ["a00",
//     {
//       id: "a03",
//       title: "Go",
//       color: "#000"
//     },
//     {
//       id: "a03b01",
//       title: "gggg",
//       color: "#000"
//     }
//   ],
//   a04: ["a00",
//     {
//       id: "a04",
//       title: "yay",
//       color: "#000"
//     }
//   ],
//   a01b01: ["a01",
//     {
//       id: "a01b01",
//       title: "Arabic",
//       color: "#000"
//     },
//     {
//       id: "a01b01c01",
//       title: "qqqqq",
//       color: "#000"
//     },
//     {
//       id: "a01b01c02",
//       title: "rrr",
//       color: "#000"
//     },
//     {
//       id: "a01b01c03",
//       title: "khkh",
//       color: "#000"
//     }
//   ],
//   a01b02: ["a01",
//     {
//       id: "a01b02",
//       title: "Urdu",
//       color: "#000"
//     }
//   ]
// };

export default data;
