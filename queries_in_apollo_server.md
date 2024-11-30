/// queries in apollo server
query {
  totalDays
  allDays {
    id
    date
    conditions
  }
}


mutation($removeDateId: ID!) {
  removeDate(id: $removeDateId) {
    date
    id
  }
}

mutation {
  addDay(input: {
    date: "1/12/2025"
    mountain: "Alpine"
    conditions: HEAVY
  }) {
    id
    mountain
    conditions
  }
}




/// https://snowtooth.moonhighway.com/
# shorcuts
# cmd + space


# Write your query or mutation here
query my_query_name ($status: LiftStatus) {
  my_lif_count: liftCount(status: $status)
  allLifts {
    name
    capacity
    id
    status
  }
}

# Write your query or mutation here
query my_query_name2 ($status: LiftStatus) {
  my_lif_count: liftCount(status: $status)
  allLifts {
    id
    status
    name
  }
}


query single_lift {
  Lift(id: "panorama"){
    id 
    name
    ...FragmentsAllFields
  }
}

query Trail {
  Trail(id: "goosebumps"){
    name
    status
    difficulty
  }
}


fragment FragmentsAllFields on Lift {
  status
  capacity
  night
  elevationGain
}

# va a escuchar por cualquier dato que haya cambiado en tiempo real
subscription my_subscription {
  liftStatusChange {
    name
    status
  }
}
# mutations
mutation my_mutation_name {
  setTrailStatus(id: "goosebumps" status: CLOSED) {
    id
 		name
    status
  }
}	