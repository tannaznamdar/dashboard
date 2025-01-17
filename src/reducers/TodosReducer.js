export default function TodosReducer(toDoes, action) {
  switch (action?.type) {
    case "add":
      return [
        ...toDoes,
        { id: action?.id, title: action?.title, status: false },
      ];

    case "initial-toDoes":
      return action?.toDoes || [];

    case "delete":
      let newTodoes = toDoes.filter((item) => {
        return action.id != item.id;
      });
      return newTodoes;

      case "toggle-status":
        let newList = toDoes.map((item) => {
                if (item.id === action.id) {
                  item.status = !item.status;
                }
                return item;
              });
              return newList;

    default:
      return toDoes;
  }
}
