{
  blueprint: {
    icons: [
      {
        signal: { type: 'item', name: 'decider-combinator' },
        index: 1
      }
    ],
    entities: [
      {
        entity_number: 1,
        name: 'decider-combinator',
        position: { x: 15, y: 5.5 },
        direction: 2,
        control_behavior: {
          decider_conditions: { constant: 0, comparator: '≥', copy_count_from_input: true }
        }
      },
      {
        entity_number: 2,
        name: 'decider-combinator',
        position: { x: 15, y: 7.5 },
        direction: 2,
        control_behavior: {
          decider_conditions: { constant: 0, comparator: '≠', copy_count_from_input: true }
        }
      },
      {
        entity_number: 3,
        name: 'decider-combinator',
        position: { x: 15, y: 6.5 },
        direction: 2,
        control_behavior: {
          decider_conditions: { constant: 0, comparator: '≤', copy_count_from_input: true }
        }
      }
    ],
    item: 'blueprint',
    version: 281479278166016
  }
}