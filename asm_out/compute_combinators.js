[
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
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
  { name: 'space', size: 2 },
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
  }
]