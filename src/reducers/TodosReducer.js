export default function TodosReducer(toDoes, action) {
  switch (action?.type) {
    case "add":
      return [
        ...toDoes , 
        {id: action?.id,
          title: action?.title,
          status:false
        }
      ]

      case "initial-toDoes":
      return action?.toDoes || [];

      default:
      return toDoes; 
  }
}
