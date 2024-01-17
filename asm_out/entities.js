[
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -0,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 2 }, { entity_id: 3, circuit_id: 1 } ] }
    },
    position: { x: 0.5, y: 0.5 },
    entity_number: 1
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    connections: {
      '1': {
        red: [
          { entity_id: 3, circuit_id: 1 },
          { entity_id: 9, circuit_id: 1 }
        ]
      }
    },
    position: { x: 1.5, y: 0.5 },
    entity_number: 2
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 10, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 4, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 0.5 },
    direction: 2,
    entity_number: 3
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 4, circuit_id: 1 } ],
        red: [ { entity_id: 5 } ]
      }
    },
    position: { x: 4.5, y: 0.5 },
    direction: 2,
    entity_number: 4
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -0,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 7, circuit_id: 1 }, { entity_id: 6 } ] }
    },
    position: { x: 6.5, y: 0.5 },
    entity_number: 5
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    connections: {
      '1': {
        green: [
          { entity_id: 7, circuit_id: 1 },
          { entity_id: 13, circuit_id: 1 }
        ]
      }
    },
    position: { x: 7.5, y: 0.5 },
    entity_number: 6
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 0.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 14, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 14, circuit_id: 2 } ] }
    },
    entity_number: 7
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 9 }, { entity_id: 10, circuit_id: 1 } ] }
    },
    position: { x: 0.5, y: 1.5 },
    entity_number: 8
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 1.5 },
    connections: {
      '1': { red: [ { entity_id: 16, circuit_id: 1 } ] }
    },
    entity_number: 9
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 17, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 11, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 1.5 },
    direction: 2,
    entity_number: 10
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 11, circuit_id: 1 } ],
        red: [ { entity_id: 12 } ]
      }
    },
    position: { x: 4.5, y: 1.5 },
    direction: 2,
    entity_number: 11
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 14, circuit_id: 1 }, { entity_id: 13 } ] }
    },
    position: { x: 6.5, y: 1.5 },
    entity_number: 12
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 1.5 },
    connections: {
      '1': { green: [ { entity_id: 20, circuit_id: 1 } ] }
    },
    entity_number: 13
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 1.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 21, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 21, circuit_id: 2 } ] }
    },
    entity_number: 14
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -2,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 16 }, { entity_id: 17, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 2.5 },
    entity_number: 15
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 2.5 },
    connections: {
      '1': { red: [ { entity_id: 23, circuit_id: 1 } ] }
    },
    entity_number: 16
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 24, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 18, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 2.5 },
    direction: 2,
    entity_number: 17
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 18, circuit_id: 1 } ],
        red: [ { entity_id: 19 } ]
      }
    },
    position: { x: 4.5, y: 2.5 },
    direction: 2,
    entity_number: 18
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -2,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 21, circuit_id: 1 }, { entity_id: 20 } ] }
    },
    position: { x: 6.5, y: 2.5 },
    entity_number: 19
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 2.5 },
    connections: {
      '1': { green: [ { entity_id: 27, circuit_id: 1 } ] }
    },
    entity_number: 20
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 2.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 28, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 28, circuit_id: 2 } ] }
    },
    entity_number: 21
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -3,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 23 }, { entity_id: 24, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 3.5 },
    entity_number: 22
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 3.5 },
    connections: {
      '1': { red: [ { entity_id: 30, circuit_id: 1 } ] }
    },
    entity_number: 23
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 31, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 25, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 3.5 },
    direction: 2,
    entity_number: 24
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 25, circuit_id: 1 } ],
        red: [ { entity_id: 26 } ]
      }
    },
    position: { x: 4.5, y: 3.5 },
    direction: 2,
    entity_number: 25
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -3,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 28, circuit_id: 1 }, { entity_id: 27 } ] }
    },
    position: { x: 6.5, y: 3.5 },
    entity_number: 26
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 3.5 },
    connections: {
      '1': { green: [ { entity_id: 34, circuit_id: 1 } ] }
    },
    entity_number: 27
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 3.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 35, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 35, circuit_id: 2 } ] }
    },
    entity_number: 28
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -4,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 30 }, { entity_id: 31, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 4.5 },
    entity_number: 29
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 4.5 },
    connections: {
      '1': { red: [ { entity_id: 37, circuit_id: 1 } ] }
    },
    entity_number: 30
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 38, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 32, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 4.5 },
    direction: 2,
    entity_number: 31
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 32, circuit_id: 1 } ],
        red: [ { entity_id: 33 } ]
      }
    },
    position: { x: 4.5, y: 4.5 },
    direction: 2,
    entity_number: 32
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -4,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 35, circuit_id: 1 }, { entity_id: 34 } ] }
    },
    position: { x: 6.5, y: 4.5 },
    entity_number: 33
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 4.5 },
    connections: {
      '1': { green: [ { entity_id: 41, circuit_id: 1 } ] }
    },
    entity_number: 34
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 4.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 42, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 42, circuit_id: 2 } ] }
    },
    entity_number: 35
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -5,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 37 }, { entity_id: 38, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 5.5 },
    entity_number: 36
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 5.5 },
    connections: {
      '1': { red: [ { entity_id: 44, circuit_id: 1 } ] }
    },
    entity_number: 37
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 45, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 39, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 5.5 },
    direction: 2,
    entity_number: 38
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 39, circuit_id: 1 } ],
        red: [ { entity_id: 40 } ]
      }
    },
    position: { x: 4.5, y: 5.5 },
    direction: 2,
    entity_number: 39
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -5,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 42, circuit_id: 1 }, { entity_id: 41 } ] }
    },
    position: { x: 6.5, y: 5.5 },
    entity_number: 40
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 5.5 },
    connections: {
      '1': { green: [ { entity_id: 48, circuit_id: 1 } ] }
    },
    entity_number: 41
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 5.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 49, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 49, circuit_id: 2 } ] }
    },
    entity_number: 42
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -6,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 44 }, { entity_id: 45, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 6.5 },
    entity_number: 43
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 6.5 },
    connections: {
      '1': { red: [ { entity_id: 51, circuit_id: 1 } ] }
    },
    entity_number: 44
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 52, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 46, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 6.5 },
    direction: 2,
    entity_number: 45
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 46, circuit_id: 1 } ],
        red: [ { entity_id: 47 } ]
      }
    },
    position: { x: 4.5, y: 6.5 },
    direction: 2,
    entity_number: 46
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -6,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 49, circuit_id: 1 }, { entity_id: 48 } ] }
    },
    position: { x: 6.5, y: 6.5 },
    entity_number: 47
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 6.5 },
    connections: {
      '1': { green: [ { entity_id: 55, circuit_id: 1 } ] }
    },
    entity_number: 48
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 6.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 56, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 56, circuit_id: 2 } ] }
    },
    entity_number: 49
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -7,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 51 }, { entity_id: 52, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 7.5 },
    entity_number: 50
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 7.5 },
    connections: {
      '1': { red: [ { entity_id: 58, circuit_id: 1 } ] }
    },
    entity_number: 51
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 59, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 53, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 7.5 },
    direction: 2,
    entity_number: 52
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 53, circuit_id: 1 } ],
        red: [ { entity_id: 54 } ]
      }
    },
    position: { x: 4.5, y: 7.5 },
    direction: 2,
    entity_number: 53
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -7,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 56, circuit_id: 1 }, { entity_id: 55 } ] }
    },
    position: { x: 6.5, y: 7.5 },
    entity_number: 54
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 7.5 },
    connections: {
      '1': { green: [ { entity_id: 62, circuit_id: 1 } ] }
    },
    entity_number: 55
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 7.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 63, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 63, circuit_id: 2 } ] }
    },
    entity_number: 56
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -8,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 58 }, { entity_id: 59, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 8.5 },
    entity_number: 57
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 8.5 },
    connections: {
      '1': { red: [ { entity_id: 65, circuit_id: 1 } ] }
    },
    entity_number: 58
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 66, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 60, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 8.5 },
    direction: 2,
    entity_number: 59
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 60, circuit_id: 1 } ],
        red: [ { entity_id: 61 } ]
      }
    },
    position: { x: 4.5, y: 8.5 },
    direction: 2,
    entity_number: 60
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -8,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 63, circuit_id: 1 }, { entity_id: 62 } ] }
    },
    position: { x: 6.5, y: 8.5 },
    entity_number: 61
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 8.5 },
    connections: {
      '1': { green: [ { entity_id: 69, circuit_id: 1 } ] }
    },
    entity_number: 62
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 8.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 70, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 70, circuit_id: 2 } ] }
    },
    entity_number: 63
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -9,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 65 }, { entity_id: 66, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 9.5 },
    entity_number: 64
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 9.5 },
    connections: {
      '1': { red: [ { entity_id: 72, circuit_id: 1 } ] }
    },
    entity_number: 65
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 73, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 67, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 9.5 },
    direction: 2,
    entity_number: 66
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 67, circuit_id: 1 } ],
        red: [ { entity_id: 68 } ]
      }
    },
    position: { x: 4.5, y: 9.5 },
    direction: 2,
    entity_number: 67
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -9,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 70, circuit_id: 1 }, { entity_id: 69 } ] }
    },
    position: { x: 6.5, y: 9.5 },
    entity_number: 68
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 9.5 },
    connections: {
      '1': { green: [ { entity_id: 76, circuit_id: 1 } ] }
    },
    entity_number: 69
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 9.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 77, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 77, circuit_id: 2 } ] }
    },
    entity_number: 70
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -10,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 72 }, { entity_id: 73, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 10.5 },
    entity_number: 71
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 10.5 },
    connections: {
      '1': { red: [ { entity_id: 79, circuit_id: 1 } ] }
    },
    entity_number: 72
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 80, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 74, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 10.5 },
    direction: 2,
    entity_number: 73
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 74, circuit_id: 1 } ],
        red: [ { entity_id: 75 } ]
      }
    },
    position: { x: 4.5, y: 10.5 },
    direction: 2,
    entity_number: 74
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -10,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 77, circuit_id: 1 }, { entity_id: 76 } ] }
    },
    position: { x: 6.5, y: 10.5 },
    entity_number: 75
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 10.5 },
    connections: {
      '1': { green: [ { entity_id: 83, circuit_id: 1 } ] }
    },
    entity_number: 76
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 10.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 84, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 84, circuit_id: 2 } ] }
    },
    entity_number: 77
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -11,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 79 }, { entity_id: 80, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 11.5 },
    entity_number: 78
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 11.5 },
    connections: {
      '1': { red: [ { entity_id: 86, circuit_id: 1 } ] }
    },
    entity_number: 79
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 87, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 81, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 11.5 },
    direction: 2,
    entity_number: 80
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 81, circuit_id: 1 } ],
        red: [ { entity_id: 82 } ]
      }
    },
    position: { x: 4.5, y: 11.5 },
    direction: 2,
    entity_number: 81
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -11,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 84, circuit_id: 1 }, { entity_id: 83 } ] }
    },
    position: { x: 6.5, y: 11.5 },
    entity_number: 82
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 11.5 },
    connections: {
      '1': { green: [ { entity_id: 90, circuit_id: 1 } ] }
    },
    entity_number: 83
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 11.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 91, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 91, circuit_id: 2 } ] }
    },
    entity_number: 84
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -12,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 86 }, { entity_id: 87, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 12.5 },
    entity_number: 85
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 12.5 },
    connections: {
      '1': { red: [ { entity_id: 93, circuit_id: 1 } ] }
    },
    entity_number: 86
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 94, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 88, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 12.5 },
    direction: 2,
    entity_number: 87
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 88, circuit_id: 1 } ],
        red: [ { entity_id: 89 } ]
      }
    },
    position: { x: 4.5, y: 12.5 },
    direction: 2,
    entity_number: 88
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -12,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 91, circuit_id: 1 }, { entity_id: 90 } ] }
    },
    position: { x: 6.5, y: 12.5 },
    entity_number: 89
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 12.5 },
    connections: {
      '1': { green: [ { entity_id: 97, circuit_id: 1 } ] }
    },
    entity_number: 90
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 12.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 98, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 98, circuit_id: 2 } ] }
    },
    entity_number: 91
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -13,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 93 }, { entity_id: 94, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 13.5 },
    entity_number: 92
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 13.5 },
    connections: {
      '1': { red: [ { entity_id: 100, circuit_id: 1 } ] }
    },
    entity_number: 93
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 101, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 95, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 13.5 },
    direction: 2,
    entity_number: 94
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 95, circuit_id: 1 } ],
        red: [ { entity_id: 96 } ]
      }
    },
    position: { x: 4.5, y: 13.5 },
    direction: 2,
    entity_number: 95
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -13,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { red: [ { entity_id: 98, circuit_id: 1 }, { entity_id: 97 } ] }
    },
    position: { x: 6.5, y: 13.5 },
    entity_number: 96
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 13.5 },
    connections: {
      '1': { green: [ { entity_id: 104, circuit_id: 1 } ] }
    },
    entity_number: 97
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 13.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 105, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 105, circuit_id: 2 } ] }
    },
    entity_number: 98
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -14,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 100 }, { entity_id: 101, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 14.5 },
    entity_number: 99
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 14.5 },
    connections: {
      '1': { red: [ { entity_id: 107, circuit_id: 1 } ] }
    },
    entity_number: 100
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 108, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 102, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 14.5 },
    direction: 2,
    entity_number: 101
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 102, circuit_id: 1 } ],
        red: [ { entity_id: 103 } ]
      }
    },
    position: { x: 4.5, y: 14.5 },
    direction: 2,
    entity_number: 102
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -14,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 105, circuit_id: 1 }, { entity_id: 104 } ]
      }
    },
    position: { x: 6.5, y: 14.5 },
    entity_number: 103
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 14.5 },
    connections: {
      '1': { green: [ { entity_id: 111, circuit_id: 1 } ] }
    },
    entity_number: 104
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 14.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 112, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 112, circuit_id: 2 } ] }
    },
    entity_number: 105
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -15,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 107 }, { entity_id: 108, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 15.5 },
    entity_number: 106
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 15.5 },
    connections: {
      '1': { red: [ { entity_id: 114, circuit_id: 1 } ] }
    },
    entity_number: 107
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 115, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 109, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 15.5 },
    direction: 2,
    entity_number: 108
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 109, circuit_id: 1 } ],
        red: [ { entity_id: 110 } ]
      }
    },
    position: { x: 4.5, y: 15.5 },
    direction: 2,
    entity_number: 109
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -15,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 112, circuit_id: 1 }, { entity_id: 111 } ]
      }
    },
    position: { x: 6.5, y: 15.5 },
    entity_number: 110
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 15.5 },
    connections: {
      '1': { green: [ { entity_id: 118, circuit_id: 1 } ] }
    },
    entity_number: 111
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 15.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 119, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 119, circuit_id: 2 } ] }
    },
    entity_number: 112
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -16,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 114 }, { entity_id: 115, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 16.5 },
    entity_number: 113
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 16.5 },
    connections: {
      '1': { red: [ { entity_id: 121, circuit_id: 1 } ] }
    },
    entity_number: 114
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 122, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 116, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 16.5 },
    direction: 2,
    entity_number: 115
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 116, circuit_id: 1 } ],
        red: [ { entity_id: 117 } ]
      }
    },
    position: { x: 4.5, y: 16.5 },
    direction: 2,
    entity_number: 116
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -16,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 119, circuit_id: 1 }, { entity_id: 118 } ]
      }
    },
    position: { x: 6.5, y: 16.5 },
    entity_number: 117
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 16.5 },
    connections: {
      '1': { green: [ { entity_id: 125, circuit_id: 1 } ] }
    },
    entity_number: 118
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 16.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 126, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 126, circuit_id: 2 } ] }
    },
    entity_number: 119
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -17,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 121 }, { entity_id: 122, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 17.5 },
    entity_number: 120
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 17.5 },
    connections: {
      '1': { red: [ { entity_id: 128, circuit_id: 1 } ] }
    },
    entity_number: 121
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 129, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 123, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 17.5 },
    direction: 2,
    entity_number: 122
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 123, circuit_id: 1 } ],
        red: [ { entity_id: 124 } ]
      }
    },
    position: { x: 4.5, y: 17.5 },
    direction: 2,
    entity_number: 123
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -17,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 126, circuit_id: 1 }, { entity_id: 125 } ]
      }
    },
    position: { x: 6.5, y: 17.5 },
    entity_number: 124
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 17.5 },
    connections: {
      '1': { green: [ { entity_id: 132, circuit_id: 1 } ] }
    },
    entity_number: 125
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 17.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 133, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 133, circuit_id: 2 } ] }
    },
    entity_number: 126
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -18,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 128 }, { entity_id: 129, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 18.5 },
    entity_number: 127
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 18.5 },
    connections: {
      '1': { red: [ { entity_id: 135, circuit_id: 1 } ] }
    },
    entity_number: 128
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 136, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 130, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 18.5 },
    direction: 2,
    entity_number: 129
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 130, circuit_id: 1 } ],
        red: [ { entity_id: 131 } ]
      }
    },
    position: { x: 4.5, y: 18.5 },
    direction: 2,
    entity_number: 130
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -18,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 133, circuit_id: 1 }, { entity_id: 132 } ]
      }
    },
    position: { x: 6.5, y: 18.5 },
    entity_number: 131
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 18.5 },
    connections: {
      '1': { green: [ { entity_id: 139, circuit_id: 1 } ] }
    },
    entity_number: 132
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 18.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 140, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 140, circuit_id: 2 } ] }
    },
    entity_number: 133
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -19,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 135 }, { entity_id: 136, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 19.5 },
    entity_number: 134
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 19.5 },
    connections: {
      '1': { red: [ { entity_id: 142, circuit_id: 1 } ] }
    },
    entity_number: 135
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { red: [ { entity_id: 143, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 137, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 19.5 },
    direction: 2,
    entity_number: 136
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 137, circuit_id: 1 } ],
        red: [ { entity_id: 138 } ]
      }
    },
    position: { x: 4.5, y: 19.5 },
    direction: 2,
    entity_number: 137
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -19,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 140, circuit_id: 1 }, { entity_id: 139 } ]
      }
    },
    position: { x: 6.5, y: 19.5 },
    entity_number: 138
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 19.5 },
    connections: {
      '1': { green: [ { entity_id: 146, circuit_id: 1 } ] }
    },
    entity_number: 139
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 19.5 },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 147, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 147, circuit_id: 2 } ] }
    },
    entity_number: 140
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: -20,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        green: [ { entity_id: 142 }, { entity_id: 143, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 20.5 },
    entity_number: 141
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 1.5, y: 20.5 },
    entity_number: 142
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-red' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': { red: [ { entity_id: 144, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 20.5 },
    direction: 2,
    entity_number: 143
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 144, circuit_id: 1 } ],
        red: [ { entity_id: 145 } ]
      }
    },
    position: { x: 4.5, y: 20.5 },
    direction: 2,
    entity_number: 144
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -20,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 147, circuit_id: 1 }, { entity_id: 146 } ]
      }
    },
    position: { x: 6.5, y: 20.5 },
    entity_number: 145
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 7.5, y: 20.5 },
    entity_number: 146
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-green' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    position: { x: 8.5, y: 20.5 },
    direction: 2,
    entity_number: 147
  },
  {
    name: 'pushbutton',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-dot' },
          count: 1,
          index: 1
        }
      ]
    },
    connections: {
      '1': { red: [ { entity_id: 149 } ] }
    },
    position: { x: 0.5, y: 21.5 },
    entity_number: 148
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-dot' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 150, circuit_id: 1 } ],
        green: [ { entity_id: 151, circuit_id: 1 } ]
      }
    },
    position: { x: 1.5, y: 21.5 },
    entity_number: 149
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-dot' },
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-cyan' },
        operation: 'OR'
      }
    },
    connections: {
      '2': { red: [ { entity_id: 151, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 21.5 },
    direction: 2,
    entity_number: 150
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        first_signal: { type: 'virtual', name: 'signal-dot' },
        second_signal: { type: 'virtual', name: 'signal-cyan' },
        output_signal: { type: 'virtual', name: 'signal-white' },
        comparator: '≠',
        copy_count_from_input: false
      }
    },
    connections: {
      '2': {
        red: [ { entity_id: 152, circuit_id: 1 } ],
        green: [ { entity_id: 152, circuit_id: 2 } ]
      }
    },
    position: { x: 4.5, y: 21.5 },
    direction: 2,
    entity_number: 151
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        first_signal: { type: 'virtual', name: 'signal-each' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-each' },
        comparator: '≠',
        copy_count_from_input: false
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 153, circuit_id: 2 } ],
        red: [ { entity_id: 153, circuit_id: 1 } ]
      }
    },
    position: { x: 6.5, y: 21.5 },
    direction: 2,
    entity_number: 152
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        first_signal: { type: 'virtual', name: 'signal-each' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-each' },
        comparator: '≠',
        copy_count_from_input: false
      }
    },
    connections: {
      '2': { green: [ { entity_id: 154, circuit_id: 2 } ] }
    },
    position: { x: 8.5, y: 21.5 },
    direction: 2,
    entity_number: 153
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-B' },
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-black' },
        operation: 'OR'
      }
    },
    connections: {
      '2': { green: [ { entity_id: 155 } ] }
    },
    position: { x: 0.5, y: 22.5 },
    direction: 2,
    entity_number: 154
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: -1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': { green: [ { entity_id: 156, circuit_id: 1 } ] }
    },
    position: { x: 2.5, y: 22.5 },
    entity_number: 155
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        comparator: '='
      }
    },
    connections: {
      '2': {
        red: [ { entity_id: 156, circuit_id: 1 } ],
        green: [ { entity_id: 172, circuit_id: 1 } ]
      }
    },
    position: { x: 3.5, y: 22.5 },
    direction: 2,
    entity_number: 156
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        red: [ { entity_id: 157, circuit_id: 1 } ],
        green: [ { entity_id: 158 } ]
      }
    },
    position: { x: 0.5, y: 23.5 },
    direction: 2,
    entity_number: 157
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [ { entity_id: 157, circuit_id: 1 }, { entity_id: 173 } ],
        green: [ { entity_id: 173 } ]
      }
    },
    position: { x: 2.5, y: 23.5 },
    entity_number: 158
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        red: [ { entity_id: 159, circuit_id: 1 } ],
        green: [ { entity_id: 160 } ]
      }
    },
    position: { x: 3.5, y: 23.5 },
    direction: 2,
    entity_number: 159
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [ { entity_id: 159, circuit_id: 1 }, { entity_id: 180 } ],
        green: [ { entity_id: 180 } ]
      }
    },
    position: { x: 5.5, y: 23.5 },
    entity_number: 160
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        red: [ { entity_id: 161, circuit_id: 1 } ],
        green: [ { entity_id: 162 } ]
      }
    },
    position: { x: 6.5, y: 23.5 },
    direction: 2,
    entity_number: 161
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [ { entity_id: 161, circuit_id: 1 }, { entity_id: 187 } ],
        green: [ { entity_id: 187 } ]
      }
    },
    position: { x: 8.5, y: 23.5 },
    entity_number: 162
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        red: [ { entity_id: 163, circuit_id: 1 } ],
        green: [ { entity_id: 164 } ]
      }
    },
    position: { x: 0.5, y: 24.5 },
    direction: 2,
    entity_number: 163
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [ { entity_id: 163, circuit_id: 1 }, { entity_id: 194 } ],
        green: [ { entity_id: 194 } ]
      }
    },
    position: { x: 2.5, y: 24.5 },
    entity_number: 164
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        red: [ { entity_id: 165, circuit_id: 1 } ],
        green: [ { entity_id: 166 } ]
      }
    },
    position: { x: 3.5, y: 24.5 },
    direction: 2,
    entity_number: 165
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [ { entity_id: 165, circuit_id: 1 }, { entity_id: 201 } ],
        green: [ { entity_id: 201 } ]
      }
    },
    position: { x: 5.5, y: 24.5 },
    entity_number: 166
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-white' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': {
        green: [ { entity_id: 167, circuit_id: 1 } ],
        red: [ { entity_id: 168 } ]
      }
    },
    position: { x: 6.5, y: 24.5 },
    direction: 2,
    entity_number: 167
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        green: [ { entity_id: 167, circuit_id: 1 }, { entity_id: 209 } ],
        red: [ { entity_id: 209 } ]
      }
    },
    position: { x: 8.5, y: 24.5 },
    entity_number: 168
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 25.5 },
    connections: {
      '1': {
        red: [
          { entity_id: 176, circuit_id: 1 },
          { entity_id: 147, circuit_id: 2 }
        ],
        green: [ { entity_id: 176, circuit_id: 1 } ]
      }
    },
    entity_number: 169
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 0,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-white' },
          count: 1,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 172, circuit_id: 1 }, { entity_id: 171 } ]
      }
    },
    position: { x: 4.5, y: 25.5 },
    entity_number: 170
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    connections: {
      '1': {
        green: [
          { entity_id: 172, circuit_id: 1 },
          { entity_id: 178, circuit_id: 1 }
        ]
      }
    },
    position: { x: 5.5, y: 25.5 },
    entity_number: 171
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 179, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 174 } ] }
    },
    position: { x: 6.5, y: 25.5 },
    direction: 2,
    entity_number: 172
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 25.5 },
    connections: {
      '1': { red: [ { entity_id: 217 } ], green: [ { entity_id: 217 } ] }
    },
    entity_number: 173
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 25.5 },
    connections: {
      '1': {
        red: [
          { entity_id: 181, circuit_id: 1 },
          { entity_id: 143, circuit_id: 1 }
        ],
        green: [
          { entity_id: 181, circuit_id: 1 },
          { entity_id: 147, circuit_id: 1 }
        ]
      }
    },
    entity_number: 174
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 25.5 },
    connections: {
      '1': {
        red: [
          { entity_id: 182, circuit_id: 1 },
          { entity_id: 154, circuit_id: 1 }
        ],
        green: [ { entity_id: 182, circuit_id: 1 } ]
      }
    },
    entity_number: 175
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 26.5 },
    connections: {
      '1': {
        red: [ { entity_id: 183, circuit_id: 1 } ],
        green: [ { entity_id: 183, circuit_id: 1 } ]
      }
    },
    entity_number: 176
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 1,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-S' },
          count: 1,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 179, circuit_id: 1 }, { entity_id: 178 } ]
      }
    },
    position: { x: 4.5, y: 26.5 },
    entity_number: 177
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 26.5 },
    connections: {
      '1': { green: [ { entity_id: 185, circuit_id: 1 } ] }
    },
    entity_number: 178
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 186, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 181 } ] }
    },
    position: { x: 6.5, y: 26.5 },
    direction: 2,
    entity_number: 179
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 26.5 },
    connections: {
      '1': { red: [ { entity_id: 224 } ], green: [ { entity_id: 224 } ] }
    },
    entity_number: 180
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 26.5 },
    connections: {
      '1': {
        red: [ { entity_id: 188, circuit_id: 1 } ],
        green: [ { entity_id: 188, circuit_id: 1 } ]
      }
    },
    entity_number: 181
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 26.5 },
    connections: {
      '1': {
        red: [ { entity_id: 189, circuit_id: 1 } ],
        green: [ { entity_id: 189, circuit_id: 1 } ]
      }
    },
    entity_number: 182
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 27.5 },
    connections: {
      '1': {
        red: [ { entity_id: 190, circuit_id: 1 } ],
        green: [ { entity_id: 190, circuit_id: 1 } ]
      }
    },
    entity_number: 183
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 6,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-white' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 186, circuit_id: 1 }, { entity_id: 185 } ]
      }
    },
    position: { x: 4.5, y: 27.5 },
    entity_number: 184
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 27.5 },
    connections: {
      '1': { green: [ { entity_id: 192, circuit_id: 1 } ] }
    },
    entity_number: 185
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 193, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 180 } ] }
    },
    position: { x: 6.5, y: 27.5 },
    direction: 2,
    entity_number: 186
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 27.5 },
    connections: {
      '1': { red: [ { entity_id: 231 } ], green: [ { entity_id: 231 } ] }
    },
    entity_number: 187
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 27.5 },
    connections: {
      '1': {
        red: [ { entity_id: 195, circuit_id: 1 } ],
        green: [ { entity_id: 195, circuit_id: 1 } ]
      }
    },
    entity_number: 188
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 27.5 },
    connections: {
      '1': {
        red: [ { entity_id: 196, circuit_id: 1 } ],
        green: [ { entity_id: 196, circuit_id: 1 } ]
      }
    },
    entity_number: 189
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 28.5 },
    connections: {
      '1': {
        red: [ { entity_id: 197, circuit_id: 1 } ],
        green: [ { entity_id: 197, circuit_id: 1 } ]
      }
    },
    entity_number: 190
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 7,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-V' },
          count: 5,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 193, circuit_id: 1 }, { entity_id: 192 } ]
      }
    },
    position: { x: 4.5, y: 28.5 },
    entity_number: 191
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 28.5 },
    connections: {
      '1': { green: [ { entity_id: 199, circuit_id: 1 } ] }
    },
    entity_number: 192
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 200, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 180 } ] }
    },
    position: { x: 6.5, y: 28.5 },
    direction: 2,
    entity_number: 193
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 28.5 },
    connections: {
      '1': { red: [ { entity_id: 238 } ], green: [ { entity_id: 238 } ] }
    },
    entity_number: 194
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 28.5 },
    connections: {
      '1': {
        red: [ { entity_id: 202, circuit_id: 1 } ],
        green: [ { entity_id: 202, circuit_id: 1 } ]
      }
    },
    entity_number: 195
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 28.5 },
    connections: {
      '1': {
        red: [ { entity_id: 203, circuit_id: 1 } ],
        green: [ { entity_id: 203, circuit_id: 1 } ]
      }
    },
    entity_number: 196
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 29.5 },
    connections: {
      '1': {
        red: [ { entity_id: 204, circuit_id: 1 } ],
        green: [ { entity_id: 204, circuit_id: 1 } ]
      }
    },
    entity_number: 197
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 8,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-S' },
          count: 1,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 200, circuit_id: 1 }, { entity_id: 199 } ]
      }
    },
    position: { x: 4.5, y: 29.5 },
    entity_number: 198
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 29.5 },
    connections: {
      '1': { green: [ { entity_id: 207, circuit_id: 1 } ] }
    },
    entity_number: 199
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 208, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 202 } ] }
    },
    position: { x: 6.5, y: 29.5 },
    direction: 2,
    entity_number: 200
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 29.5 },
    connections: {
      '1': { red: [ { entity_id: 245 } ], green: [ { entity_id: 245 } ] }
    },
    entity_number: 201
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 29.5 },
    connections: {
      '1': {
        red: [ { entity_id: 210, circuit_id: 1 } ],
        green: [ { entity_id: 210, circuit_id: 1 } ]
      }
    },
    entity_number: 202
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 29.5 },
    connections: {
      '1': {
        red: [ { entity_id: 211, circuit_id: 1 } ],
        green: [ { entity_id: 211, circuit_id: 1 } ]
      }
    },
    entity_number: 203
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 205, circuit_id: 1 },
          { entity_id: 212, circuit_id: 1 }
        ],
        green: [ { entity_id: 212, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 30.5 },
    entity_number: 204
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 206 } ] }
    },
    position: { x: 2.5, y: 30.5 },
    entity_number: 205
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 9,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-white' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 208, circuit_id: 1 }, { entity_id: 207 } ]
      }
    },
    position: { x: 4.5, y: 30.5 },
    entity_number: 206
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 30.5 },
    connections: {
      '1': { green: [ { entity_id: 215, circuit_id: 1 } ] }
    },
    entity_number: 207
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 216, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 210 } ] }
    },
    position: { x: 6.5, y: 30.5 },
    direction: 2,
    entity_number: 208
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 30.5 },
    connections: {
      '1': { red: [ { entity_id: 254 } ], green: [ { entity_id: 254 } ] }
    },
    entity_number: 209
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 30.5 },
    connections: {
      '1': {
        red: [ { entity_id: 218, circuit_id: 1 } ],
        green: [ { entity_id: 218, circuit_id: 1 } ]
      }
    },
    entity_number: 210
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 30.5 },
    connections: {
      '1': {
        red: [ { entity_id: 219, circuit_id: 1 } ],
        green: [ { entity_id: 219, circuit_id: 1 } ]
      }
    },
    entity_number: 211
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 213, circuit_id: 1 },
          { entity_id: 220, circuit_id: 1 }
        ],
        green: [ { entity_id: 220, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 31.5 },
    entity_number: 212
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 214 } ] }
    },
    position: { x: 2.5, y: 31.5 },
    entity_number: 213
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 10,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: -14,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 216, circuit_id: 1 }, { entity_id: 215 } ]
      }
    },
    position: { x: 4.5, y: 31.5 },
    entity_number: 214
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 31.5 },
    connections: {
      '1': { green: [ { entity_id: 222, circuit_id: 1 } ] }
    },
    entity_number: 215
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 223, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 218 } ] }
    },
    position: { x: 6.5, y: 31.5 },
    direction: 2,
    entity_number: 216
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 31.5 },
    connections: {
      '1': { red: [ { entity_id: 261 } ], green: [ { entity_id: 261 } ] }
    },
    entity_number: 217
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 31.5 },
    connections: {
      '1': {
        red: [ { entity_id: 225, circuit_id: 1 } ],
        green: [ { entity_id: 225, circuit_id: 1 } ]
      }
    },
    entity_number: 218
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 31.5 },
    connections: {
      '1': {
        red: [ { entity_id: 226, circuit_id: 1 } ],
        green: [ { entity_id: 226, circuit_id: 1 } ]
      }
    },
    entity_number: 219
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 32.5 },
    connections: {
      '1': {
        red: [ { entity_id: 227, circuit_id: 1 } ],
        green: [ { entity_id: 227, circuit_id: 1 } ]
      }
    },
    entity_number: 220
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 13,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: -3,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 223, circuit_id: 1 }, { entity_id: 222 } ]
      }
    },
    position: { x: 4.5, y: 32.5 },
    entity_number: 221
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 32.5 },
    connections: {
      '1': { green: [ { entity_id: 229, circuit_id: 1 } ] }
    },
    entity_number: 222
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 230, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 226 } ] }
    },
    position: { x: 6.5, y: 32.5 },
    direction: 2,
    entity_number: 223
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 32.5 },
    connections: {
      '1': {
        green: [ { entity_id: 250, circuit_id: 1 }, { entity_id: 269 } ],
        red: [ { entity_id: 269 } ]
      }
    },
    entity_number: 224
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 32.5 },
    connections: {
      '1': {
        red: [ { entity_id: 232, circuit_id: 1 } ],
        green: [ { entity_id: 232, circuit_id: 1 } ]
      }
    },
    entity_number: 225
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 32.5 },
    connections: {
      '1': {
        red: [ { entity_id: 233, circuit_id: 1 } ],
        green: [ { entity_id: 233, circuit_id: 1 } ]
      }
    },
    entity_number: 226
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 33.5 },
    connections: {
      '1': {
        red: [ { entity_id: 234, circuit_id: 1 } ],
        green: [ { entity_id: 234, circuit_id: 1 } ]
      }
    },
    entity_number: 227
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 16,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 230, circuit_id: 1 }, { entity_id: 229 } ]
      }
    },
    position: { x: 4.5, y: 33.5 },
    entity_number: 228
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 33.5 },
    connections: {
      '1': { green: [ { entity_id: 236, circuit_id: 1 } ] }
    },
    entity_number: 229
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 237, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 233 } ] }
    },
    position: { x: 6.5, y: 33.5 },
    direction: 2,
    entity_number: 230
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 33.5 },
    connections: {
      '1': { red: [ { entity_id: 277 } ], green: [ { entity_id: 277 } ] }
    },
    entity_number: 231
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 33.5 },
    connections: {
      '1': {
        red: [ { entity_id: 239, circuit_id: 1 } ],
        green: [ { entity_id: 239, circuit_id: 1 } ]
      }
    },
    entity_number: 232
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 33.5 },
    connections: {
      '1': {
        red: [ { entity_id: 240, circuit_id: 1 } ],
        green: [ { entity_id: 240, circuit_id: 1 } ]
      }
    },
    entity_number: 233
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 34.5 },
    connections: {
      '1': {
        red: [ { entity_id: 241, circuit_id: 1 } ],
        green: [ { entity_id: 241, circuit_id: 1 } ]
      }
    },
    entity_number: 234
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 17,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 237, circuit_id: 1 }, { entity_id: 236 } ]
      }
    },
    position: { x: 4.5, y: 34.5 },
    entity_number: 235
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 34.5 },
    connections: {
      '1': { green: [ { entity_id: 243, circuit_id: 1 } ] }
    },
    entity_number: 236
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 244, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 240 } ] }
    },
    position: { x: 6.5, y: 34.5 },
    direction: 2,
    entity_number: 237
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 34.5 },
    connections: {
      '1': { red: [ { entity_id: 285 } ], green: [ { entity_id: 285 } ] }
    },
    entity_number: 238
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 34.5 },
    connections: {
      '1': {
        red: [ { entity_id: 246, circuit_id: 1 } ],
        green: [ { entity_id: 246, circuit_id: 1 } ]
      }
    },
    entity_number: 239
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 34.5 },
    connections: {
      '1': {
        red: [ { entity_id: 247, circuit_id: 1 } ],
        green: [ { entity_id: 247, circuit_id: 1 } ]
      }
    },
    entity_number: 240
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 35.5 },
    connections: {
      '1': {
        red: [ { entity_id: 248, circuit_id: 1 } ],
        green: [ { entity_id: 248, circuit_id: 1 } ]
      }
    },
    entity_number: 241
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 18,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 244, circuit_id: 1 }, { entity_id: 243 } ]
      }
    },
    position: { x: 4.5, y: 35.5 },
    entity_number: 242
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 35.5 },
    connections: {
      '1': { green: [ { entity_id: 252, circuit_id: 1 } ] }
    },
    entity_number: 243
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 253, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 247 } ] }
    },
    position: { x: 6.5, y: 35.5 },
    direction: 2,
    entity_number: 244
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 35.5 },
    connections: {
      '1': { red: [ { entity_id: 293 } ], green: [ { entity_id: 293 } ] }
    },
    entity_number: 245
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 35.5 },
    connections: {
      '1': {
        red: [ { entity_id: 255, circuit_id: 1 } ],
        green: [ { entity_id: 255, circuit_id: 1 } ]
      }
    },
    entity_number: 246
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 35.5 },
    connections: {
      '1': {
        red: [ { entity_id: 256, circuit_id: 1 } ],
        green: [ { entity_id: 256, circuit_id: 1 } ]
      }
    },
    entity_number: 247
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 36.5 },
    connections: {
      '1': {
        red: [ { entity_id: 257, circuit_id: 1 } ],
        green: [ { entity_id: 257, circuit_id: 1 } ]
      }
    },
    entity_number: 248
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': { red: [ { entity_id: 250, circuit_id: 1 } ] }
    },
    direction: 2,
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: -47,
          index: 1
        }
      ]
    },
    position: { x: 1.5, y: 36.5 },
    entity_number: 249
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        first_signal: { type: 'virtual', name: 'signal-V' },
        comparator: '≤',
        constant: 1,
        output_signal: { type: 'virtual', name: 'signal-B' },
        copy_count_from_input: true
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 251 } ] }
    },
    position: { x: 2.5, y: 36.5 },
    entity_number: 250
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 19,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 253, circuit_id: 1 }, { entity_id: 252 } ]
      }
    },
    position: { x: 4.5, y: 36.5 },
    entity_number: 251
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 36.5 },
    connections: {
      '1': { green: [ { entity_id: 259, circuit_id: 1 } ] }
    },
    entity_number: 252
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 260, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 256 } ] }
    },
    position: { x: 6.5, y: 36.5 },
    direction: 2,
    entity_number: 253
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 36.5 },
    connections: {
      '1': { red: [ { entity_id: 300 } ], green: [ { entity_id: 300 } ] }
    },
    entity_number: 254
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 36.5 },
    connections: {
      '1': {
        red: [ { entity_id: 262, circuit_id: 1 } ],
        green: [ { entity_id: 262, circuit_id: 1 } ]
      }
    },
    entity_number: 255
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 36.5 },
    connections: {
      '1': {
        red: [ { entity_id: 263, circuit_id: 1 } ],
        green: [ { entity_id: 263, circuit_id: 1 } ]
      }
    },
    entity_number: 256
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 37.5 },
    connections: {
      '1': {
        red: [ { entity_id: 264, circuit_id: 1 } ],
        green: [ { entity_id: 264, circuit_id: 1 } ]
      }
    },
    entity_number: 257
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 22,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-S' },
          count: 1,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 260, circuit_id: 1 }, { entity_id: 259 } ]
      }
    },
    position: { x: 4.5, y: 37.5 },
    entity_number: 258
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 37.5 },
    connections: {
      '1': { green: [ { entity_id: 267, circuit_id: 1 } ] }
    },
    entity_number: 259
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 268, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 262 } ] }
    },
    position: { x: 6.5, y: 37.5 },
    direction: 2,
    entity_number: 260
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 37.5 },
    connections: {
      '1': { red: [ { entity_id: 307 } ], green: [ { entity_id: 307 } ] }
    },
    entity_number: 261
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 37.5 },
    connections: {
      '1': {
        red: [ { entity_id: 270, circuit_id: 1 } ],
        green: [ { entity_id: 270, circuit_id: 1 } ]
      }
    },
    entity_number: 262
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 37.5 },
    connections: {
      '1': {
        red: [ { entity_id: 271, circuit_id: 1 } ],
        green: [ { entity_id: 271, circuit_id: 1 } ]
      }
    },
    entity_number: 263
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 265, circuit_id: 1 },
          { entity_id: 272, circuit_id: 1 }
        ],
        green: [ { entity_id: 272, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 38.5 },
    entity_number: 264
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 266 } ] }
    },
    position: { x: 2.5, y: 38.5 },
    entity_number: 265
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 23,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 268, circuit_id: 1 }, { entity_id: 267 } ]
      }
    },
    position: { x: 4.5, y: 38.5 },
    entity_number: 266
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 38.5 },
    connections: {
      '1': { green: [ { entity_id: 275, circuit_id: 1 } ] }
    },
    entity_number: 267
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 276, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 269 } ] }
    },
    position: { x: 6.5, y: 38.5 },
    direction: 2,
    entity_number: 268
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 38.5 },
    connections: {
      '1': {
        green: [ { entity_id: 281, circuit_id: 1 }, { entity_id: 315 } ],
        red: [ { entity_id: 315 } ]
      }
    },
    entity_number: 269
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 38.5 },
    connections: {
      '1': {
        red: [ { entity_id: 278, circuit_id: 1 } ],
        green: [ { entity_id: 278, circuit_id: 1 } ]
      }
    },
    entity_number: 270
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 38.5 },
    connections: {
      '1': {
        red: [ { entity_id: 279, circuit_id: 1 } ],
        green: [ { entity_id: 279, circuit_id: 1 } ]
      }
    },
    entity_number: 271
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 273, circuit_id: 1 },
          { entity_id: 280, circuit_id: 1 }
        ],
        green: [ { entity_id: 280, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 39.5 },
    entity_number: 272
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 274 } ] }
    },
    position: { x: 2.5, y: 39.5 },
    entity_number: 273
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 24,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-white' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 276, circuit_id: 1 }, { entity_id: 275 } ]
      }
    },
    position: { x: 4.5, y: 39.5 },
    entity_number: 274
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 39.5 },
    connections: {
      '1': { green: [ { entity_id: 283, circuit_id: 1 } ] }
    },
    entity_number: 275
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 284, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 278 } ] }
    },
    position: { x: 6.5, y: 39.5 },
    direction: 2,
    entity_number: 276
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 39.5 },
    connections: {
      '1': { red: [ { entity_id: 323 } ], green: [ { entity_id: 323 } ] }
    },
    entity_number: 277
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 39.5 },
    connections: {
      '1': {
        red: [ { entity_id: 286, circuit_id: 1 } ],
        green: [ { entity_id: 286, circuit_id: 1 } ]
      }
    },
    entity_number: 278
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 39.5 },
    connections: {
      '1': {
        red: [ { entity_id: 287, circuit_id: 1 } ],
        green: [ { entity_id: 287, circuit_id: 1 } ]
      }
    },
    entity_number: 279
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 40.5 },
    connections: {
      '1': {
        red: [ { entity_id: 288, circuit_id: 1 } ],
        green: [ { entity_id: 288, circuit_id: 1 } ]
      }
    },
    entity_number: 280
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-each' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-each' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 282 } ] }
    },
    position: { x: 2.5, y: 40.5 },
    entity_number: 281
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 26,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 284, circuit_id: 1 }, { entity_id: 283 } ]
      }
    },
    position: { x: 4.5, y: 40.5 },
    entity_number: 282
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 40.5 },
    connections: {
      '1': { green: [ { entity_id: 291, circuit_id: 1 } ] }
    },
    entity_number: 283
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 292, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 286 } ] }
    },
    position: { x: 6.5, y: 40.5 },
    direction: 2,
    entity_number: 284
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 40.5 },
    connections: {
      '1': { red: [ { entity_id: 330 } ], green: [ { entity_id: 330 } ] }
    },
    entity_number: 285
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 40.5 },
    connections: {
      '1': {
        red: [ { entity_id: 294, circuit_id: 1 } ],
        green: [ { entity_id: 294, circuit_id: 1 } ]
      }
    },
    entity_number: 286
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 40.5 },
    connections: {
      '1': {
        red: [ { entity_id: 295, circuit_id: 1 } ],
        green: [ { entity_id: 295, circuit_id: 1 } ]
      }
    },
    entity_number: 287
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 289, circuit_id: 1 },
          { entity_id: 296, circuit_id: 1 }
        ],
        green: [ { entity_id: 296, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 41.5 },
    entity_number: 288
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_constant: 0,
        operation: '-',
        second_signal: { type: 'virtual', name: 'signal-S' },
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 290 } ] }
    },
    position: { x: 2.5, y: 41.5 },
    entity_number: 289
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 27,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 292, circuit_id: 1 }, { entity_id: 291 } ]
      }
    },
    position: { x: 4.5, y: 41.5 },
    entity_number: 290
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 41.5 },
    connections: {
      '1': { green: [ { entity_id: 298, circuit_id: 1 } ] }
    },
    entity_number: 291
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 299, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 269 } ] }
    },
    position: { x: 6.5, y: 41.5 },
    direction: 2,
    entity_number: 292
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 41.5 },
    connections: {
      '1': { red: [ { entity_id: 337 } ], green: [ { entity_id: 337 } ] }
    },
    entity_number: 293
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 41.5 },
    connections: {
      '1': {
        red: [ { entity_id: 301, circuit_id: 1 } ],
        green: [ { entity_id: 301, circuit_id: 1 } ]
      }
    },
    entity_number: 294
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 41.5 },
    connections: {
      '1': {
        red: [ { entity_id: 302, circuit_id: 1 } ],
        green: [ { entity_id: 302, circuit_id: 1 } ]
      }
    },
    entity_number: 295
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 42.5 },
    connections: {
      '1': {
        red: [ { entity_id: 303, circuit_id: 1 } ],
        green: [ { entity_id: 303, circuit_id: 1 } ]
      }
    },
    entity_number: 296
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 28,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-V' },
          count: -1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 299, circuit_id: 1 }, { entity_id: 298 } ]
      }
    },
    position: { x: 4.5, y: 42.5 },
    entity_number: 297
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 42.5 },
    connections: {
      '1': { green: [ { entity_id: 305, circuit_id: 1 } ] }
    },
    entity_number: 298
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 306, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 269 } ] }
    },
    position: { x: 6.5, y: 42.5 },
    direction: 2,
    entity_number: 299
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 42.5 },
    connections: {
      '1': { red: [ { entity_id: 345 } ], green: [ { entity_id: 345 } ] }
    },
    entity_number: 300
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 42.5 },
    connections: {
      '1': {
        red: [ { entity_id: 308, circuit_id: 1 } ],
        green: [ { entity_id: 308, circuit_id: 1 } ]
      }
    },
    entity_number: 301
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 42.5 },
    connections: {
      '1': {
        red: [ { entity_id: 309, circuit_id: 1 } ],
        green: [ { entity_id: 309, circuit_id: 1 } ]
      }
    },
    entity_number: 302
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 43.5 },
    connections: {
      '1': {
        red: [ { entity_id: 310, circuit_id: 1 } ],
        green: [ { entity_id: 310, circuit_id: 1 } ]
      }
    },
    entity_number: 303
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 29,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-S' },
          count: 1,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 306, circuit_id: 1 }, { entity_id: 305 } ]
      }
    },
    position: { x: 4.5, y: 43.5 },
    entity_number: 304
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 43.5 },
    connections: {
      '1': { green: [ { entity_id: 313, circuit_id: 1 } ] }
    },
    entity_number: 305
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 314, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 308 } ] }
    },
    position: { x: 6.5, y: 43.5 },
    direction: 2,
    entity_number: 306
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 43.5 },
    connections: {
      '1': { red: [ { entity_id: 352 } ], green: [ { entity_id: 352 } ] }
    },
    entity_number: 307
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 43.5 },
    connections: {
      '1': {
        red: [ { entity_id: 316, circuit_id: 1 } ],
        green: [ { entity_id: 316, circuit_id: 1 } ]
      }
    },
    entity_number: 308
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 43.5 },
    connections: {
      '1': {
        red: [ { entity_id: 317, circuit_id: 1 } ],
        green: [ { entity_id: 317, circuit_id: 1 } ]
      }
    },
    entity_number: 309
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 311, circuit_id: 1 },
          { entity_id: 318, circuit_id: 1 }
        ],
        green: [ { entity_id: 318, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 44.5 },
    entity_number: 310
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 312 } ] }
    },
    position: { x: 2.5, y: 44.5 },
    entity_number: 311
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 30,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-white' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 314, circuit_id: 1 }, { entity_id: 313 } ]
      }
    },
    position: { x: 4.5, y: 44.5 },
    entity_number: 312
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 44.5 },
    connections: {
      '1': { green: [ { entity_id: 321, circuit_id: 1 } ] }
    },
    entity_number: 313
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 322, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 316 } ] }
    },
    position: { x: 6.5, y: 44.5 },
    direction: 2,
    entity_number: 314
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 44.5 },
    connections: {
      '1': { red: [ { entity_id: 360 } ], green: [ { entity_id: 360 } ] }
    },
    entity_number: 315
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 44.5 },
    connections: {
      '1': {
        red: [ { entity_id: 324, circuit_id: 1 } ],
        green: [ { entity_id: 324, circuit_id: 1 } ]
      }
    },
    entity_number: 316
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 44.5 },
    connections: {
      '1': {
        red: [ { entity_id: 325, circuit_id: 1 } ],
        green: [ { entity_id: 325, circuit_id: 1 } ]
      }
    },
    entity_number: 317
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 319, circuit_id: 1 },
          { entity_id: 326, circuit_id: 1 }
        ],
        green: [ { entity_id: 326, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 45.5 },
    entity_number: 318
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 320 } ] }
    },
    position: { x: 2.5, y: 45.5 },
    entity_number: 319
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 31,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: -35,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 322, circuit_id: 1 }, { entity_id: 321 } ]
      }
    },
    position: { x: 4.5, y: 45.5 },
    entity_number: 320
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 45.5 },
    connections: {
      '1': { green: [ { entity_id: 328, circuit_id: 1 } ] }
    },
    entity_number: 321
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 329, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 324 } ] }
    },
    position: { x: 6.5, y: 45.5 },
    direction: 2,
    entity_number: 322
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 45.5 },
    connections: {
      '1': { red: [ { entity_id: 367 } ], green: [ { entity_id: 367 } ] }
    },
    entity_number: 323
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 45.5 },
    connections: {
      '1': {
        red: [ { entity_id: 331, circuit_id: 1 } ],
        green: [ { entity_id: 331, circuit_id: 1 } ]
      }
    },
    entity_number: 324
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 45.5 },
    connections: {
      '1': {
        red: [ { entity_id: 332, circuit_id: 1 } ],
        green: [ { entity_id: 332, circuit_id: 1 } ]
      }
    },
    entity_number: 325
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 46.5 },
    connections: {
      '1': {
        red: [ { entity_id: 333, circuit_id: 1 } ],
        green: [ { entity_id: 333, circuit_id: 1 } ]
      }
    },
    entity_number: 326
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 34,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: 18,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 329, circuit_id: 1 }, { entity_id: 328 } ]
      }
    },
    position: { x: 4.5, y: 46.5 },
    entity_number: 327
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 46.5 },
    connections: {
      '1': { green: [ { entity_id: 335, circuit_id: 1 } ] }
    },
    entity_number: 328
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 336, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 332 } ] }
    },
    position: { x: 6.5, y: 46.5 },
    direction: 2,
    entity_number: 329
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 46.5 },
    connections: {
      '1': { red: [ { entity_id: 375 } ], green: [ { entity_id: 375 } ] }
    },
    entity_number: 330
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 46.5 },
    connections: {
      '1': {
        red: [ { entity_id: 338, circuit_id: 1 } ],
        green: [ { entity_id: 338, circuit_id: 1 } ]
      }
    },
    entity_number: 331
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 46.5 },
    connections: {
      '1': {
        red: [ { entity_id: 339, circuit_id: 1 } ],
        green: [ { entity_id: 339, circuit_id: 1 } ]
      }
    },
    entity_number: 332
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 47.5 },
    connections: {
      '1': {
        red: [ { entity_id: 340, circuit_id: 1 } ],
        green: [ { entity_id: 340, circuit_id: 1 } ]
      }
    },
    entity_number: 333
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 37,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-S' },
          count: -1,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 336, circuit_id: 1 }, { entity_id: 335 } ]
      }
    },
    position: { x: 4.5, y: 47.5 },
    entity_number: 334
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 47.5 },
    connections: {
      '1': { green: [ { entity_id: 343, circuit_id: 1 } ] }
    },
    entity_number: 335
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 344, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 338 } ] }
    },
    position: { x: 6.5, y: 47.5 },
    direction: 2,
    entity_number: 336
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 47.5 },
    connections: {
      '1': { red: [ { entity_id: 383 } ], green: [ { entity_id: 383 } ] }
    },
    entity_number: 337
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 47.5 },
    connections: {
      '1': {
        red: [ { entity_id: 346, circuit_id: 1 } ],
        green: [ { entity_id: 346, circuit_id: 1 } ]
      }
    },
    entity_number: 338
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 47.5 },
    connections: {
      '1': {
        red: [ { entity_id: 347, circuit_id: 1 } ],
        green: [ { entity_id: 347, circuit_id: 1 } ]
      }
    },
    entity_number: 339
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 341, circuit_id: 1 },
          { entity_id: 348, circuit_id: 1 }
        ],
        green: [ { entity_id: 348, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 48.5 },
    entity_number: 340
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-green' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 342 } ] }
    },
    position: { x: 2.5, y: 48.5 },
    entity_number: 341
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 38,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 344, circuit_id: 1 }, { entity_id: 343 } ]
      }
    },
    position: { x: 4.5, y: 48.5 },
    entity_number: 342
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 48.5 },
    connections: {
      '1': { green: [ { entity_id: 350, circuit_id: 1 } ] }
    },
    entity_number: 343
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 351, circuit_id: 1 } ] },
      '2': { green: [ { entity_id: 346 } ] }
    },
    position: { x: 6.5, y: 48.5 },
    direction: 2,
    entity_number: 344
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 48.5 },
    connections: {
      '1': { red: [ { entity_id: 391 } ], green: [ { entity_id: 391 } ] }
    },
    entity_number: 345
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 48.5 },
    connections: {
      '1': {
        red: [ { entity_id: 353, circuit_id: 1 } ],
        green: [ { entity_id: 353, circuit_id: 1 } ]
      }
    },
    entity_number: 346
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 48.5 },
    connections: {
      '1': {
        red: [ { entity_id: 354, circuit_id: 1 } ],
        green: [ { entity_id: 354, circuit_id: 1 } ]
      }
    },
    entity_number: 347
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 49.5 },
    connections: {
      '1': {
        red: [ { entity_id: 355, circuit_id: 1 } ],
        green: [ { entity_id: 355, circuit_id: 1 } ]
      }
    },
    entity_number: 348
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 40,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-white' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 351, circuit_id: 1 }, { entity_id: 350 } ]
      }
    },
    position: { x: 4.5, y: 49.5 },
    entity_number: 349
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 49.5 },
    connections: {
      '1': { green: [ { entity_id: 358, circuit_id: 1 } ] }
    },
    entity_number: 350
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 359, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 315 } ] }
    },
    position: { x: 6.5, y: 49.5 },
    direction: 2,
    entity_number: 351
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 49.5 },
    connections: {
      '1': {
        green: [ { entity_id: 387, circuit_id: 1 }, { entity_id: 399 } ],
        red: [ { entity_id: 399 } ]
      }
    },
    entity_number: 352
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 49.5 },
    connections: {
      '1': {
        red: [ { entity_id: 361, circuit_id: 1 } ],
        green: [ { entity_id: 361, circuit_id: 1 } ]
      }
    },
    entity_number: 353
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 49.5 },
    connections: {
      '1': {
        red: [ { entity_id: 362, circuit_id: 1 } ],
        green: [ { entity_id: 362, circuit_id: 1 } ]
      }
    },
    entity_number: 354
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 356, circuit_id: 1 },
          { entity_id: 363, circuit_id: 1 }
        ],
        green: [ { entity_id: 363, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 50.5 },
    entity_number: 355
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-each' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-each' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 357 } ] }
    },
    position: { x: 2.5, y: 50.5 },
    entity_number: 356
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 41,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 359, circuit_id: 1 }, { entity_id: 358 } ]
      }
    },
    position: { x: 4.5, y: 50.5 },
    entity_number: 357
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 50.5 },
    connections: {
      '1': { green: [ { entity_id: 365, circuit_id: 1 } ] }
    },
    entity_number: 358
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 366, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 360 } ] }
    },
    position: { x: 6.5, y: 50.5 },
    direction: 2,
    entity_number: 359
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 50.5 },
    connections: {
      '1': { red: [ { entity_id: 406 } ], green: [ { entity_id: 406 } ] }
    },
    entity_number: 360
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 50.5 },
    connections: {
      '1': {
        red: [ { entity_id: 368, circuit_id: 1 } ],
        green: [ { entity_id: 368, circuit_id: 1 } ]
      }
    },
    entity_number: 361
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 50.5 },
    connections: {
      '1': {
        red: [ { entity_id: 369, circuit_id: 1 } ],
        green: [ { entity_id: 369, circuit_id: 1 } ]
      }
    },
    entity_number: 362
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 51.5 },
    connections: {
      '1': {
        red: [ { entity_id: 370, circuit_id: 1 } ],
        green: [ { entity_id: 370, circuit_id: 1 } ]
      }
    },
    entity_number: 363
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 42,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-S' },
          count: 1,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 366, circuit_id: 1 }, { entity_id: 365 } ]
      }
    },
    position: { x: 4.5, y: 51.5 },
    entity_number: 364
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 51.5 },
    connections: {
      '1': { green: [ { entity_id: 373, circuit_id: 1 } ] }
    },
    entity_number: 365
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 374, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 368 } ] }
    },
    position: { x: 6.5, y: 51.5 },
    direction: 2,
    entity_number: 366
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 51.5 },
    connections: {
      '1': { red: [ { entity_id: 413 } ], green: [ { entity_id: 413 } ] }
    },
    entity_number: 367
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 51.5 },
    connections: {
      '1': {
        red: [ { entity_id: 376, circuit_id: 1 } ],
        green: [ { entity_id: 376, circuit_id: 1 } ]
      }
    },
    entity_number: 368
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 51.5 },
    connections: {
      '1': {
        red: [ { entity_id: 377, circuit_id: 1 } ],
        green: [ { entity_id: 377, circuit_id: 1 } ]
      }
    },
    entity_number: 369
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 371, circuit_id: 1 },
          { entity_id: 378, circuit_id: 1 }
        ],
        green: [ { entity_id: 378, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 52.5 },
    entity_number: 370
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 372 } ] }
    },
    position: { x: 2.5, y: 52.5 },
    entity_number: 371
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 43,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 374, circuit_id: 1 }, { entity_id: 373 } ]
      }
    },
    position: { x: 4.5, y: 52.5 },
    entity_number: 372
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 52.5 },
    connections: {
      '1': { green: [ { entity_id: 381, circuit_id: 1 } ] }
    },
    entity_number: 373
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 382, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 352 } ] }
    },
    position: { x: 6.5, y: 52.5 },
    direction: 2,
    entity_number: 374
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 52.5 },
    connections: {
      '1': { red: [ { entity_id: 421 } ], green: [ { entity_id: 421 } ] }
    },
    entity_number: 375
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 52.5 },
    connections: {
      '1': {
        red: [ { entity_id: 384, circuit_id: 1 } ],
        green: [ { entity_id: 384, circuit_id: 1 } ]
      }
    },
    entity_number: 376
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 52.5 },
    connections: {
      '1': {
        red: [ { entity_id: 385, circuit_id: 1 } ],
        green: [ { entity_id: 385, circuit_id: 1 } ]
      }
    },
    entity_number: 377
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 379, circuit_id: 1 },
          { entity_id: 386, circuit_id: 1 }
        ],
        green: [ { entity_id: 386, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 53.5 },
    entity_number: 378
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 380 } ] }
    },
    position: { x: 2.5, y: 53.5 },
    entity_number: 379
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 44,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-white' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 382, circuit_id: 1 }, { entity_id: 381 } ]
      }
    },
    position: { x: 4.5, y: 53.5 },
    entity_number: 380
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 53.5 },
    connections: {
      '1': { green: [ { entity_id: 389, circuit_id: 1 } ] }
    },
    entity_number: 381
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 390, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 384 } ] }
    },
    position: { x: 6.5, y: 53.5 },
    direction: 2,
    entity_number: 382
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 53.5 },
    connections: {
      '1': { red: [ { entity_id: 429 } ], green: [ { entity_id: 429 } ] }
    },
    entity_number: 383
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 53.5 },
    connections: {
      '1': {
        red: [ { entity_id: 392, circuit_id: 1 } ],
        green: [ { entity_id: 392, circuit_id: 1 } ]
      }
    },
    entity_number: 384
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 53.5 },
    connections: {
      '1': {
        red: [ { entity_id: 393, circuit_id: 1 } ],
        green: [ { entity_id: 393, circuit_id: 1 } ]
      }
    },
    entity_number: 385
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 54.5 },
    connections: {
      '1': {
        red: [ { entity_id: 394, circuit_id: 1 } ],
        green: [ { entity_id: 394, circuit_id: 1 } ]
      }
    },
    entity_number: 386
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-each' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-each' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 388 } ] }
    },
    position: { x: 2.5, y: 54.5 },
    entity_number: 387
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 46,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 390, circuit_id: 1 }, { entity_id: 389 } ]
      }
    },
    position: { x: 4.5, y: 54.5 },
    entity_number: 388
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 54.5 },
    connections: {
      '1': { green: [ { entity_id: 397, circuit_id: 1 } ] }
    },
    entity_number: 389
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 398, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 392 } ] }
    },
    position: { x: 6.5, y: 54.5 },
    direction: 2,
    entity_number: 390
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 54.5 },
    connections: {
      '1': { red: [ { entity_id: 436 } ], green: [ { entity_id: 436 } ] }
    },
    entity_number: 391
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 54.5 },
    connections: {
      '1': {
        red: [ { entity_id: 400, circuit_id: 1 } ],
        green: [ { entity_id: 400, circuit_id: 1 } ]
      }
    },
    entity_number: 392
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 54.5 },
    connections: {
      '1': {
        red: [ { entity_id: 401, circuit_id: 1 } ],
        green: [ { entity_id: 401, circuit_id: 1 } ]
      }
    },
    entity_number: 393
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 395, circuit_id: 1 },
          { entity_id: 402, circuit_id: 1 }
        ],
        green: [ { entity_id: 402, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 55.5 },
    entity_number: 394
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_constant: 0,
        operation: '-',
        second_signal: { type: 'virtual', name: 'signal-S' },
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 396 } ] }
    },
    position: { x: 2.5, y: 55.5 },
    entity_number: 395
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 47,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 398, circuit_id: 1 }, { entity_id: 397 } ]
      }
    },
    position: { x: 4.5, y: 55.5 },
    entity_number: 396
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 55.5 },
    connections: {
      '1': { green: [ { entity_id: 404, circuit_id: 1 } ] }
    },
    entity_number: 397
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 405, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 399 } ] }
    },
    position: { x: 6.5, y: 55.5 },
    direction: 2,
    entity_number: 398
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 55.5 },
    connections: {
      '1': { red: [ { entity_id: 443 } ], green: [ { entity_id: 443 } ] }
    },
    entity_number: 399
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 55.5 },
    connections: {
      '1': {
        red: [ { entity_id: 407, circuit_id: 1 } ],
        green: [ { entity_id: 407, circuit_id: 1 } ]
      }
    },
    entity_number: 400
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 55.5 },
    connections: {
      '1': {
        red: [ { entity_id: 408, circuit_id: 1 } ],
        green: [ { entity_id: 408, circuit_id: 1 } ]
      }
    },
    entity_number: 401
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 56.5 },
    connections: {
      '1': {
        red: [ { entity_id: 409, circuit_id: 1 } ],
        green: [ { entity_id: 409, circuit_id: 1 } ]
      }
    },
    entity_number: 402
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 48,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-V' },
          count: -2,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 405, circuit_id: 1 }, { entity_id: 404 } ]
      }
    },
    position: { x: 4.5, y: 56.5 },
    entity_number: 403
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 56.5 },
    connections: {
      '1': { green: [ { entity_id: 411, circuit_id: 1 } ] }
    },
    entity_number: 404
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 412, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 406 } ] }
    },
    position: { x: 6.5, y: 56.5 },
    direction: 2,
    entity_number: 405
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 56.5 },
    connections: {
      '1': { red: [ { entity_id: 451 } ], green: [ { entity_id: 451 } ] }
    },
    entity_number: 406
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 56.5 },
    connections: {
      '1': {
        red: [ { entity_id: 414, circuit_id: 1 } ],
        green: [ { entity_id: 414, circuit_id: 1 } ]
      }
    },
    entity_number: 407
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 56.5 },
    connections: {
      '1': {
        red: [ { entity_id: 415, circuit_id: 1 } ],
        green: [ { entity_id: 415, circuit_id: 1 } ]
      }
    },
    entity_number: 408
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 57.5 },
    connections: {
      '1': {
        red: [ { entity_id: 416, circuit_id: 1 } ],
        green: [ { entity_id: 416, circuit_id: 1 } ]
      }
    },
    entity_number: 409
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 49,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-S' },
          count: 1,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 412, circuit_id: 1 }, { entity_id: 411 } ]
      }
    },
    position: { x: 4.5, y: 57.5 },
    entity_number: 410
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 57.5 },
    connections: {
      '1': { green: [ { entity_id: 419, circuit_id: 1 } ] }
    },
    entity_number: 411
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 420, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 414 } ] }
    },
    position: { x: 6.5, y: 57.5 },
    direction: 2,
    entity_number: 412
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 57.5 },
    connections: {
      '1': { red: [ { entity_id: 458 } ], green: [ { entity_id: 458 } ] }
    },
    entity_number: 413
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 57.5 },
    connections: {
      '1': {
        red: [ { entity_id: 422, circuit_id: 1 } ],
        green: [ { entity_id: 422, circuit_id: 1 } ]
      }
    },
    entity_number: 414
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 57.5 },
    connections: {
      '1': {
        red: [ { entity_id: 423, circuit_id: 1 } ],
        green: [ { entity_id: 423, circuit_id: 1 } ]
      }
    },
    entity_number: 415
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 417, circuit_id: 1 },
          { entity_id: 424, circuit_id: 1 }
        ],
        green: [ { entity_id: 424, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 58.5 },
    entity_number: 416
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 418 } ] }
    },
    position: { x: 2.5, y: 58.5 },
    entity_number: 417
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 50,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-white' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 420, circuit_id: 1 }, { entity_id: 419 } ]
      }
    },
    position: { x: 4.5, y: 58.5 },
    entity_number: 418
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 58.5 },
    connections: {
      '1': { green: [ { entity_id: 427, circuit_id: 1 } ] }
    },
    entity_number: 419
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 428, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 422 } ] }
    },
    position: { x: 6.5, y: 58.5 },
    direction: 2,
    entity_number: 420
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 58.5 },
    connections: {
      '1': { red: [ { entity_id: 466 } ], green: [ { entity_id: 466 } ] }
    },
    entity_number: 421
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 58.5 },
    connections: {
      '1': {
        red: [ { entity_id: 430, circuit_id: 1 } ],
        green: [ { entity_id: 430, circuit_id: 1 } ]
      }
    },
    entity_number: 422
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 58.5 },
    connections: {
      '1': {
        red: [ { entity_id: 431, circuit_id: 1 } ],
        green: [ { entity_id: 431, circuit_id: 1 } ]
      }
    },
    entity_number: 423
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 425, circuit_id: 1 },
          { entity_id: 432, circuit_id: 1 }
        ],
        green: [ { entity_id: 432, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 59.5 },
    entity_number: 424
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-red' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 426 } ] }
    },
    position: { x: 2.5, y: 59.5 },
    entity_number: 425
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 51,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: -55,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 428, circuit_id: 1 }, { entity_id: 427 } ]
      }
    },
    position: { x: 4.5, y: 59.5 },
    entity_number: 426
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 59.5 },
    connections: {
      '1': { green: [ { entity_id: 434, circuit_id: 1 } ] }
    },
    entity_number: 427
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 435, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 430 } ] }
    },
    position: { x: 6.5, y: 59.5 },
    direction: 2,
    entity_number: 428
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 59.5 },
    connections: {
      '1': { red: [ { entity_id: 474 } ], green: [ { entity_id: 474 } ] }
    },
    entity_number: 429
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 59.5 },
    connections: {
      '1': {
        red: [ { entity_id: 437, circuit_id: 1 } ],
        green: [ { entity_id: 437, circuit_id: 1 } ]
      }
    },
    entity_number: 430
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 59.5 },
    connections: {
      '1': {
        red: [ { entity_id: 438, circuit_id: 1 } ],
        green: [ { entity_id: 438, circuit_id: 1 } ]
      }
    },
    entity_number: 431
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 60.5 },
    connections: {
      '1': {
        red: [ { entity_id: 439, circuit_id: 1 } ],
        green: [ { entity_id: 439, circuit_id: 1 } ]
      }
    },
    entity_number: 432
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 54,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: 38,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 435, circuit_id: 1 }, { entity_id: 434 } ]
      }
    },
    position: { x: 4.5, y: 60.5 },
    entity_number: 433
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 60.5 },
    connections: {
      '1': { green: [ { entity_id: 441, circuit_id: 1 } ] }
    },
    entity_number: 434
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 442, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 438 } ] }
    },
    position: { x: 6.5, y: 60.5 },
    direction: 2,
    entity_number: 435
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 60.5 },
    connections: {
      '1': { red: [ { entity_id: 482 } ], green: [ { entity_id: 482 } ] }
    },
    entity_number: 436
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 60.5 },
    connections: {
      '1': {
        red: [ { entity_id: 444, circuit_id: 1 } ],
        green: [ { entity_id: 444, circuit_id: 1 } ]
      }
    },
    entity_number: 437
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 60.5 },
    connections: {
      '1': {
        red: [ { entity_id: 445, circuit_id: 1 } ],
        green: [ { entity_id: 445, circuit_id: 1 } ]
      }
    },
    entity_number: 438
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 61.5 },
    connections: {
      '1': {
        red: [ { entity_id: 446, circuit_id: 1 } ],
        green: [ { entity_id: 446, circuit_id: 1 } ]
      }
    },
    entity_number: 439
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 57,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-S' },
          count: -1,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 442, circuit_id: 1 }, { entity_id: 441 } ]
      }
    },
    position: { x: 4.5, y: 61.5 },
    entity_number: 440
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 61.5 },
    connections: {
      '1': { green: [ { entity_id: 449, circuit_id: 1 } ] }
    },
    entity_number: 441
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 450, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 444 } ] }
    },
    position: { x: 6.5, y: 61.5 },
    direction: 2,
    entity_number: 442
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 61.5 },
    connections: {
      '1': { red: [ { entity_id: 489 } ], green: [ { entity_id: 489 } ] }
    },
    entity_number: 443
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 61.5 },
    connections: {
      '1': {
        red: [ { entity_id: 452, circuit_id: 1 } ],
        green: [ { entity_id: 452, circuit_id: 1 } ]
      }
    },
    entity_number: 444
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 61.5 },
    connections: {
      '1': {
        red: [ { entity_id: 453, circuit_id: 1 } ],
        green: [ { entity_id: 453, circuit_id: 1 } ]
      }
    },
    entity_number: 445
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 447, circuit_id: 1 },
          { entity_id: 454, circuit_id: 1 }
        ],
        green: [ { entity_id: 454, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 62.5 },
    entity_number: 446
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-green' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 448 } ] }
    },
    position: { x: 2.5, y: 62.5 },
    entity_number: 447
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 58,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 450, circuit_id: 1 }, { entity_id: 449 } ]
      }
    },
    position: { x: 4.5, y: 62.5 },
    entity_number: 448
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 62.5 },
    connections: {
      '1': { green: [ { entity_id: 456, circuit_id: 1 } ] }
    },
    entity_number: 449
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 457, circuit_id: 1 } ] },
      '2': { green: [ { entity_id: 452 } ] }
    },
    position: { x: 6.5, y: 62.5 },
    direction: 2,
    entity_number: 450
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 62.5 },
    connections: {
      '1': {
        green: [ { entity_id: 470, circuit_id: 1 }, { entity_id: 497 } ],
        red: [ { entity_id: 497 } ]
      }
    },
    entity_number: 451
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 62.5 },
    connections: {
      '1': {
        red: [ { entity_id: 459, circuit_id: 1 } ],
        green: [ { entity_id: 459, circuit_id: 1 } ]
      }
    },
    entity_number: 452
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 62.5 },
    connections: {
      '1': {
        red: [ { entity_id: 460, circuit_id: 1 } ],
        green: [ { entity_id: 460, circuit_id: 1 } ]
      }
    },
    entity_number: 453
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 63.5 },
    connections: {
      '1': {
        red: [ { entity_id: 461, circuit_id: 1 } ],
        green: [ { entity_id: 461, circuit_id: 1 } ]
      }
    },
    entity_number: 454
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 60,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-white' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 457, circuit_id: 1 }, { entity_id: 456 } ]
      }
    },
    position: { x: 4.5, y: 63.5 },
    entity_number: 455
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 63.5 },
    connections: {
      '1': { green: [ { entity_id: 464, circuit_id: 1 } ] }
    },
    entity_number: 456
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 465, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 451 } ] }
    },
    position: { x: 6.5, y: 63.5 },
    direction: 2,
    entity_number: 457
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 63.5 },
    connections: {
      '1': { red: [ { entity_id: 504 } ], green: [ { entity_id: 504 } ] }
    },
    entity_number: 458
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 63.5 },
    connections: {
      '1': {
        red: [ { entity_id: 467, circuit_id: 1 } ],
        green: [ { entity_id: 467, circuit_id: 1 } ]
      }
    },
    entity_number: 459
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 63.5 },
    connections: {
      '1': {
        red: [ { entity_id: 468, circuit_id: 1 } ],
        green: [ { entity_id: 468, circuit_id: 1 } ]
      }
    },
    entity_number: 460
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 462, circuit_id: 1 },
          { entity_id: 469, circuit_id: 1 }
        ],
        green: [ { entity_id: 469, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 64.5 },
    entity_number: 461
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-each' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-each' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 463 } ] }
    },
    position: { x: 2.5, y: 64.5 },
    entity_number: 462
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 61,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 465, circuit_id: 1 }, { entity_id: 464 } ]
      }
    },
    position: { x: 4.5, y: 64.5 },
    entity_number: 463
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 64.5 },
    connections: {
      '1': { green: [ { entity_id: 472, circuit_id: 1 } ] }
    },
    entity_number: 464
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 473, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 451 } ] }
    },
    position: { x: 6.5, y: 64.5 },
    direction: 2,
    entity_number: 465
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 64.5 },
    connections: {
      '1': { red: [ { entity_id: 512 } ], green: [ { entity_id: 512 } ] }
    },
    entity_number: 466
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 64.5 },
    connections: {
      '1': {
        red: [ { entity_id: 475, circuit_id: 1 } ],
        green: [ { entity_id: 475, circuit_id: 1 } ]
      }
    },
    entity_number: 467
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 64.5 },
    connections: {
      '1': {
        red: [ { entity_id: 476, circuit_id: 1 } ],
        green: [ { entity_id: 476, circuit_id: 1 } ]
      }
    },
    entity_number: 468
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 65.5 },
    connections: {
      '1': {
        red: [ { entity_id: 477, circuit_id: 1 } ],
        green: [ { entity_id: 477, circuit_id: 1 } ]
      }
    },
    entity_number: 469
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-each' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-each' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 471 } ] }
    },
    position: { x: 2.5, y: 65.5 },
    entity_number: 470
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 62,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 473, circuit_id: 1 }, { entity_id: 472 } ]
      }
    },
    position: { x: 4.5, y: 65.5 },
    entity_number: 471
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 65.5 },
    connections: {
      '1': { green: [ { entity_id: 480, circuit_id: 1 } ] }
    },
    entity_number: 472
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 481, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 443 } ] }
    },
    position: { x: 6.5, y: 65.5 },
    direction: 2,
    entity_number: 473
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 65.5 },
    connections: {
      '1': { red: [ { entity_id: 520 } ], green: [ { entity_id: 520 } ] }
    },
    entity_number: 474
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 65.5 },
    connections: {
      '1': {
        red: [ { entity_id: 483, circuit_id: 1 } ],
        green: [ { entity_id: 483, circuit_id: 1 } ]
      }
    },
    entity_number: 475
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 65.5 },
    connections: {
      '1': {
        red: [ { entity_id: 484, circuit_id: 1 } ],
        green: [ { entity_id: 484, circuit_id: 1 } ]
      }
    },
    entity_number: 476
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 478, circuit_id: 1 },
          { entity_id: 485, circuit_id: 1 }
        ],
        green: [ { entity_id: 485, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 66.5 },
    entity_number: 477
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-green' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 479 } ] }
    },
    position: { x: 2.5, y: 66.5 },
    entity_number: 478
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 63,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 481, circuit_id: 1 }, { entity_id: 480 } ]
      }
    },
    position: { x: 4.5, y: 66.5 },
    entity_number: 479
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 66.5 },
    connections: {
      '1': { green: [ { entity_id: 487, circuit_id: 1 } ] }
    },
    entity_number: 480
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 488, circuit_id: 1 } ] },
      '2': { green: [ { entity_id: 483 } ] }
    },
    position: { x: 6.5, y: 66.5 },
    direction: 2,
    entity_number: 481
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 66.5 },
    connections: {
      '1': { red: [ { entity_id: 527 } ], green: [ { entity_id: 527 } ] }
    },
    entity_number: 482
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 66.5 },
    connections: {
      '1': {
        red: [ { entity_id: 490, circuit_id: 1 } ],
        green: [ { entity_id: 490, circuit_id: 1 } ]
      }
    },
    entity_number: 483
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 66.5 },
    connections: {
      '1': {
        red: [ { entity_id: 491, circuit_id: 1 } ],
        green: [ { entity_id: 491, circuit_id: 1 } ]
      }
    },
    entity_number: 484
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 67.5 },
    connections: {
      '1': {
        red: [ { entity_id: 492, circuit_id: 1 } ],
        green: [ { entity_id: 492, circuit_id: 1 } ]
      }
    },
    entity_number: 485
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 64,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-S' },
          count: -1,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 488, circuit_id: 1 }, { entity_id: 487 } ]
      }
    },
    position: { x: 4.5, y: 67.5 },
    entity_number: 486
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 67.5 },
    connections: {
      '1': { green: [ { entity_id: 495, circuit_id: 1 } ] }
    },
    entity_number: 487
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 496, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 490 } ] }
    },
    position: { x: 6.5, y: 67.5 },
    direction: 2,
    entity_number: 488
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 67.5 },
    connections: {
      '1': { red: [ { entity_id: 535 } ], green: [ { entity_id: 535 } ] }
    },
    entity_number: 489
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 67.5 },
    connections: {
      '1': {
        red: [ { entity_id: 498, circuit_id: 1 } ],
        green: [ { entity_id: 498, circuit_id: 1 } ]
      }
    },
    entity_number: 490
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 67.5 },
    connections: {
      '1': {
        red: [ { entity_id: 499, circuit_id: 1 } ],
        green: [ { entity_id: 499, circuit_id: 1 } ]
      }
    },
    entity_number: 491
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 493, circuit_id: 1 },
          { entity_id: 500, circuit_id: 1 }
        ],
        green: [ { entity_id: 500, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 68.5 },
    entity_number: 492
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-B' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-B' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 494 } ] }
    },
    position: { x: 2.5, y: 68.5 },
    entity_number: 493
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 66,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: 69,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 496, circuit_id: 1 }, { entity_id: 495 } ]
      }
    },
    position: { x: 4.5, y: 68.5 },
    entity_number: 494
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 68.5 },
    connections: {
      '1': { green: [ { entity_id: 502, circuit_id: 1 } ] }
    },
    entity_number: 495
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 503, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 499 } ] }
    },
    position: { x: 6.5, y: 68.5 },
    direction: 2,
    entity_number: 496
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 68.5 },
    connections: {
      '1': { green: [ { entity_id: 508, circuit_id: 1 } ] }
    },
    entity_number: 497
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 68.5 },
    connections: {
      '1': {
        red: [ { entity_id: 505, circuit_id: 1 } ],
        green: [ { entity_id: 505, circuit_id: 1 } ]
      }
    },
    entity_number: 498
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 68.5 },
    connections: {
      '1': {
        red: [ { entity_id: 506, circuit_id: 1 } ],
        green: [ { entity_id: 506, circuit_id: 1 } ]
      }
    },
    entity_number: 499
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 69.5 },
    connections: {
      '1': {
        red: [ { entity_id: 507, circuit_id: 1 } ],
        green: [ { entity_id: 507, circuit_id: 1 } ]
      }
    },
    entity_number: 500
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 69,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-white' },
          count: 1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 503, circuit_id: 1 }, { entity_id: 502 } ]
      }
    },
    position: { x: 4.5, y: 69.5 },
    entity_number: 501
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 69.5 },
    connections: {
      '1': { green: [ { entity_id: 510, circuit_id: 1 } ] }
    },
    entity_number: 502
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 511, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 489 } ] }
    },
    position: { x: 6.5, y: 69.5 },
    direction: 2,
    entity_number: 503
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 69.5 },
    entity_number: 504
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 69.5 },
    connections: {
      '1': {
        red: [ { entity_id: 513, circuit_id: 1 } ],
        green: [ { entity_id: 513, circuit_id: 1 } ]
      }
    },
    entity_number: 505
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 69.5 },
    connections: {
      '1': {
        red: [ { entity_id: 514, circuit_id: 1 } ],
        green: [ { entity_id: 514, circuit_id: 1 } ]
      }
    },
    entity_number: 506
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 70.5 },
    connections: {
      '1': {
        red: [ { entity_id: 515, circuit_id: 1 } ],
        green: [ { entity_id: 515, circuit_id: 1 } ]
      }
    },
    entity_number: 507
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-each' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-each' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 509 } ] }
    },
    position: { x: 2.5, y: 70.5 },
    entity_number: 508
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 70,
          index: 20
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 511, circuit_id: 1 }, { entity_id: 510 } ]
      }
    },
    position: { x: 4.5, y: 70.5 },
    entity_number: 509
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 70.5 },
    connections: {
      '1': { green: [ { entity_id: 518, circuit_id: 1 } ] }
    },
    entity_number: 510
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 519, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 489 } ] }
    },
    position: { x: 6.5, y: 70.5 },
    direction: 2,
    entity_number: 511
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 70.5 },
    entity_number: 512
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 70.5 },
    connections: {
      '1': {
        red: [ { entity_id: 521, circuit_id: 1 } ],
        green: [ { entity_id: 521, circuit_id: 1 } ]
      }
    },
    entity_number: 513
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 70.5 },
    connections: {
      '1': {
        red: [ { entity_id: 522, circuit_id: 1 } ],
        green: [ { entity_id: 522, circuit_id: 1 } ]
      }
    },
    entity_number: 514
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': {
        red: [
          { entity_id: 516, circuit_id: 1 },
          { entity_id: 523, circuit_id: 1 }
        ],
        green: [ { entity_id: 523, circuit_id: 1 } ]
      }
    },
    position: { x: 0.5, y: 71.5 },
    entity_number: 515
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-S' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-green' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 517 } ] }
    },
    position: { x: 2.5, y: 71.5 },
    entity_number: 516
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 71,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-green' },
          count: -1,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 519, circuit_id: 1 }, { entity_id: 518 } ]
      }
    },
    position: { x: 4.5, y: 71.5 },
    entity_number: 517
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 71.5 },
    connections: {
      '1': { green: [ { entity_id: 525, circuit_id: 1 } ] }
    },
    entity_number: 518
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 526, circuit_id: 1 } ] },
      '2': { green: [ { entity_id: 521 } ] }
    },
    position: { x: 6.5, y: 71.5 },
    direction: 2,
    entity_number: 519
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 71.5 },
    entity_number: 520
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 71.5 },
    connections: {
      '1': {
        red: [ { entity_id: 528, circuit_id: 1 } ],
        green: [ { entity_id: 528, circuit_id: 1 } ]
      }
    },
    entity_number: 521
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 71.5 },
    connections: {
      '1': {
        red: [ { entity_id: 529, circuit_id: 1 } ],
        green: [ { entity_id: 529, circuit_id: 1 } ]
      }
    },
    entity_number: 522
  },
  {
    name: 'constant-combinator',
    position: { x: 0.5, y: 72.5 },
    connections: {
      '1': {
        red: [ { entity_id: 530, circuit_id: 1 } ],
        green: [ { entity_id: 530, circuit_id: 1 } ]
      }
    },
    entity_number: 523
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 72,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-red' },
          count: 0,
          index: 1
        },
        {
          signal: { type: 'virtual', name: 'signal-S' },
          count: -1,
          index: 2
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 526, circuit_id: 1 }, { entity_id: 525 } ]
      }
    },
    position: { x: 4.5, y: 72.5 },
    entity_number: 524
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 72.5 },
    connections: {
      '1': { green: [ { entity_id: 533, circuit_id: 1 } ] }
    },
    entity_number: 525
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '1': { green: [ { entity_id: 534, circuit_id: 1 } ] },
      '2': { red: [ { entity_id: 528 } ] }
    },
    position: { x: 6.5, y: 72.5 },
    direction: 2,
    entity_number: 526
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 72.5 },
    entity_number: 527
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 72.5 },
    connections: {
      '1': {
        red: [ { entity_id: 536, circuit_id: 1 } ],
        green: [ { entity_id: 536, circuit_id: 1 } ]
      }
    },
    entity_number: 528
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 72.5 },
    connections: {
      '1': {
        red: [ { entity_id: 537, circuit_id: 1 } ],
        green: [ { entity_id: 537, circuit_id: 1 } ]
      }
    },
    entity_number: 529
  },
  {
    name: 'constant-combinator',
    connections: {
      '1': { red: [ { entity_id: 531, circuit_id: 1 } ] }
    },
    position: { x: 0.5, y: 73.5 },
    entity_number: 530
  },
  {
    name: 'arithmetic-combinator',
    control_behavior: {
      arithmetic_conditions: {
        first_signal: { type: 'virtual', name: 'signal-B' },
        operation: 'OR',
        second_constant: 0,
        output_signal: { type: 'virtual', name: 'signal-B' }
      }
    },
    direction: 2,
    connections: {
      '2': { red: [ { entity_id: 532 } ] }
    },
    position: { x: 2.5, y: 73.5 },
    entity_number: 531
  },
  {
    name: 'constant-combinator',
    control_behavior: {
      filters: [
        {
          signal: { type: 'virtual', name: 'signal-black' },
          count: 74,
          index: 20
        },
        {
          signal: { type: 'virtual', name: 'signal-B' },
          count: 77,
          index: 1
        }
      ]
    },
    direction: 2,
    connections: {
      '1': {
        red: [ { entity_id: 534, circuit_id: 1 }, { entity_id: 533 } ]
      }
    },
    position: { x: 4.5, y: 73.5 },
    entity_number: 532
  },
  {
    name: 'small-lamp',
    control_behavior: {
      circuit_condition: {
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        comparator: '='
      }
    },
    position: { x: 5.5, y: 73.5 },
    entity_number: 533
  },
  {
    name: 'decider-combinator',
    control_behavior: {
      decider_conditions: {
        comparator: '=',
        first_signal: { type: 'virtual', name: 'signal-black' },
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    },
    connections: {
      '2': { red: [ { entity_id: 537 } ] }
    },
    position: { x: 6.5, y: 73.5 },
    direction: 2,
    entity_number: 534
  },
  {
    name: 'constant-combinator',
    position: { x: 8.5, y: 73.5 },
    entity_number: 535
  },
  {
    name: 'constant-combinator',
    position: { x: 9.5, y: 73.5 },
    entity_number: 536
  },
  {
    name: 'constant-combinator',
    position: { x: 10.5, y: 73.5 },
    entity_number: 537
  },
  {
    name: 'substation',
    position: { x: -1, y: 1 },
    neighbours: [ 539, 540 ],
    entity_number: 538
  },
  {
    name: 'substation',
    position: { x: 12, y: 1 },
    neighbours: [ 538, 541 ],
    entity_number: 539
  },
  {
    name: 'substation',
    position: { x: -1, y: 19 },
    neighbours: [ 541, 538, 542 ],
    entity_number: 540
  },
  {
    name: 'substation',
    position: { x: 12, y: 19 },
    neighbours: [ 540, 539, 543 ],
    entity_number: 541
  },
  {
    name: 'substation',
    position: { x: -1, y: 37 },
    neighbours: [ 543, 540, 544 ],
    entity_number: 542
  },
  {
    name: 'substation',
    position: { x: 12, y: 37 },
    neighbours: [ 542, 541, 545 ],
    entity_number: 543
  },
  {
    name: 'substation',
    position: { x: -1, y: 55 },
    neighbours: [ 545, 542, 546 ],
    entity_number: 544
  },
  {
    name: 'substation',
    position: { x: 12, y: 55 },
    neighbours: [ 544, 543, 547 ],
    entity_number: 545
  },
  {
    name: 'substation',
    position: { x: -1, y: 73 },
    neighbours: [ 547, 544 ],
    entity_number: 546
  },
  {
    name: 'substation',
    position: { x: 12, y: 73 },
    neighbours: [ 546, 545 ],
    entity_number: 547
  }
]