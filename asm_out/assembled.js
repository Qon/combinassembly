{
  macros: Map {
    'stop' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'stop', line: 15, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 16, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 16,
                    column: 11
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 16,
                      column: 15
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'jump',
                    line: 16,
                    column: 18
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 17, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 17,
                    column: 11
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 17,
                      column: 15
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'jump',
                    line: 17,
                    column: 18
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 18, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 18,
                    column: 11
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 18,
                      column: 15
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'jump',
                    line: 18,
                    column: 18
                  },
                  value: []
                }
              ]
            }
          ]
        }
      ]
    },
    'mov' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'mov', line: 21, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 22, column: 3 },
          operands: [
            [
              {
                token: 'identifier',
                string: 'clear',
                line: 22,
                column: 11
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 22,
                  column: 19
                }
              }
            ]
          ]
        },
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'connect',
            line: 23,
            column: 3
          },
          operands: [
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 23,
                  column: 12
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 23,
                  column: 16
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '2',
                  number: 2,
                  line: 23,
                  column: 20
                }
              }
            ]
          ]
        }
      ]
    },
    'set' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'set', line: 26, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 27, column: 3 },
          operands: [
            [
              {
                token: 'identifier',
                string: 'clear',
                line: 27,
                column: 11
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 27,
                  column: 19
                }
              }
            ]
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 28, column: 3 },
          operands: [
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 28,
                  column: 12
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 28,
                  column: 16
                }
              }
            ]
          ]
        }
      ]
    },
    'jmp' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'jmp', line: 31, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 32, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 32,
                    column: 11
                  },
                  value: [
                    {
                      token: 'identifier',
                      string: 'ip',
                      line: 32,
                      column: 15
                    },
                    { token: '+', line: 32, column: 18 },
                    {
                      token: 'number',
                      string: '3',
                      number: 3,
                      line: 32,
                      column: 20
                    },
                    { token: '-', line: 32, column: 22 },
                    {
                      node: 'parameter',
                      parameter: {
                        token: 'number',
                        string: '0',
                        number: 0,
                        line: 32,
                        column: 25
                      }
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'jump',
                    line: 32,
                    column: 28
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 33, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 34, column: 3 },
          operands: []
        }
      ]
    },
    'branch' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'branch', line: 37, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'decid', line: 38, column: 3 },
          operands: [
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 38,
                  column: 12
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '2',
                  number: 2,
                  line: 38,
                  column: 16
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '3',
                  number: 3,
                  line: 38,
                  column: 20
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 38,
                    column: 23
                  },
                  value: []
                }
              ]
            },
            [],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '4',
                  number: 4,
                  line: 38,
                  column: 30
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'jump',
                    line: 38,
                    column: 33
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 38,
                    column: 41
                  },
                  value: [
                    {
                      token: 'identifier',
                      string: 'ip',
                      line: 38,
                      column: 45
                    },
                    { token: '+', line: 38, column: 48 },
                    {
                      token: 'number',
                      string: '3',
                      number: 3,
                      line: 38,
                      column: 50
                    },
                    { token: '-', line: 38, column: 52 },
                    {
                      node: 'parameter',
                      parameter: {
                        token: 'number',
                        string: '0',
                        number: 0,
                        line: 38,
                        column: 55
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 39, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 40, column: 3 },
          operands: []
        }
      ]
    },
    'wait' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'wait', line: 43, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'decid', line: 44, column: 3 },
          operands: [
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 44,
                  column: 12
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 44,
                  column: 16
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '2',
                  number: 2,
                  line: 44,
                  column: 20
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 44,
                    column: 23
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 44,
                      column: 27
                    }
                  ]
                }
              ]
            },
            [],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '3',
                  number: 3,
                  line: 44,
                  column: 32
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'jump',
                    line: 44,
                    column: 35
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'decid', line: 45, column: 3 },
          operands: [
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 45,
                  column: 12
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 45,
                  column: 16
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '2',
                  number: 2,
                  line: 45,
                  column: 20
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 45,
                    column: 23
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 45,
                      column: 27
                    }
                  ]
                }
              ]
            },
            [],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '3',
                  number: 3,
                  line: 45,
                  column: 32
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'jump',
                    line: 45,
                    column: 35
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'decid', line: 46, column: 3 },
          operands: [
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 46,
                  column: 12
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 46,
                  column: 16
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '2',
                  number: 2,
                  line: 46,
                  column: 20
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 46,
                    column: 23
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 46,
                      column: 27
                    }
                  ]
                }
              ]
            },
            [],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '3',
                  number: 3,
                  line: 46,
                  column: 32
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'jump',
                    line: 46,
                    column: 35
                  },
                  value: []
                }
              ]
            }
          ]
        }
      ]
    },
    'connect' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'connect', line: 49, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'arith', line: 50, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'each',
                    line: 50,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'OR',
                    line: 50,
                    column: 19
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'number',
                string: '0',
                number: 0,
                line: 50,
                column: 25
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'each',
                    line: 50,
                    column: 28
                  },
                  value: []
                }
              ]
            },
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '2',
                  number: 2,
                  line: 50,
                  column: 37
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 50,
                  column: 41
                }
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 50,
                  column: 45
                }
              }
            ]
          ]
        }
      ]
    },
    'load' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'load', line: 53, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 54, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'green',
                    line: 54,
                    column: 11
                  },
                  value: [
                    {
                      node: 'parameter',
                      parameter: {
                        token: 'number',
                        string: '0',
                        number: 0,
                        line: 54,
                        column: 20
                      }
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memq',
                    line: 54,
                    column: 23
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 55, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 56, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'connect',
            line: 57,
            column: 3
          },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 57,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 57,
                  column: 20
                }
              }
            ]
          ]
        }
      ]
    },
    'store' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'store', line: 60, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'connect',
            line: 61,
            column: 3
          },
          operands: [ [] ]
        }
      ]
    },
    'pushconst' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'pushconst', line: 64, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 65, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 65,
                    column: 11
                  },
                  value: [
                    {
                      token: 'number',
                      string: '0',
                      number: 0,
                      line: 65,
                      column: 17
                    }
                  ]
                },
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 65,
                    column: 19
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 65,
                      column: 23
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 65,
                    column: 26
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'arith', line: 66, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 66,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'OR',
                    line: 66,
                    column: 16
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'number',
                string: '0',
                number: 0,
                line: 66,
                column: 22
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 66,
                    column: 25
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'identifier',
                string: 'clear',
                line: 66,
                column: 32
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 66,
                    column: 39
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 66,
                    column: 47
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'arith', line: 67, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 67,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'OR',
                    line: 67,
                    column: 16
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'number',
                string: '0',
                number: 0,
                line: 67,
                column: 22
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 67,
                    column: 25
                  },
                  value: []
                }
              ]
            },
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 67,
                  column: 33
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 67,
                    column: 36
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 67,
                    column: 44
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 68, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 69, column: 3 },
          operands: []
        }
      ]
    },
    'push' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'push', line: 72, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 73, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 73,
                    column: 11
                  },
                  value: [
                    {
                      token: 'number',
                      string: '0',
                      number: 0,
                      line: 73,
                      column: 17
                    }
                  ]
                },
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 73,
                    column: 19
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 73,
                      column: 23
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 73,
                    column: 26
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'arith', line: 74, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 74,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'OR',
                    line: 74,
                    column: 16
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'number',
                string: '0',
                number: 0,
                line: 74,
                column: 22
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 74,
                    column: 27
                  },
                  value: []
                }
              ]
            },
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 74,
                  column: 35
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 74,
                    column: 41
                  },
                  value: []
                }
              ]
            },
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 74,
                  column: 50
                }
              }
            ]
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'arith', line: 75, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 75,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'OR',
                    line: 75,
                    column: 16
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'number',
                string: '0',
                number: 0,
                line: 75,
                column: 22
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 75,
                    column: 27
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'identifier',
                string: 'clear',
                line: 75,
                column: 34
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 75,
                    column: 41
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 75,
                    column: 49
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 76, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'connect',
            line: 77,
            column: 3
          },
          operands: [
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 77,
                  column: 12
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 77,
                    column: 15
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'arith', line: 78, column: 3 },
          operands: [
            [
              {
                token: 'number',
                string: '0',
                number: 0,
                line: 78,
                column: 11
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: '-',
                    line: 78,
                    column: 16
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 78,
                    column: 22
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 78,
                    column: 27
                  },
                  value: []
                }
              ]
            },
            [],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 78,
                    column: 41
                  },
                  value: []
                }
              ]
            },
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 78,
                  column: 50
                }
              }
            ]
          ]
        }
      ]
    },
    'pop' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'pop', line: 81, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 82, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 82,
                    column: 11
                  },
                  value: [
                    {
                      token: 'number',
                      string: '0',
                      number: 0,
                      line: 82,
                      column: 17
                    }
                  ]
                },
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 82,
                    column: 19
                  },
                  value: [
                    { token: '-', line: 82, column: 23 },
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 82,
                      column: 24
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 82,
                    column: 27
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'arith', line: 83, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 83,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'OR',
                    line: 83,
                    column: 16
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'number',
                string: '0',
                number: 0,
                line: 83,
                column: 22
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'green',
                    line: 83,
                    column: 25
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'green',
                    line: 83,
                    column: 34
                  },
                  value: [
                    { token: '-', line: 83, column: 42 },
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 83,
                      column: 43
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 83,
                    column: 46
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memq',
                    line: 83,
                    column: 54
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 84, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 85, column: 3 },
          operands: [
            [
              {
                token: 'identifier',
                string: 'clear',
                line: 85,
                column: 11
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 85,
                  column: 19
                }
              }
            ]
          ]
        },
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'connect',
            line: 86,
            column: 3
          },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 86,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 86,
                  column: 20
                }
              }
            ]
          ]
        }
      ]
    },
    'top' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'top', line: 90, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'arith', line: 91, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 91,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'OR',
                    line: 91,
                    column: 16
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'number',
                string: '0',
                number: 0,
                line: 91,
                column: 22
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'green',
                    line: 91,
                    column: 25
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'green',
                    line: 91,
                    column: 34
                  },
                  value: [
                    { token: '-', line: 91, column: 42 },
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 91,
                      column: 43
                    },
                    { token: '-', line: 91, column: 45 },
                    {
                      node: 'parameter',
                      parameter: {
                        token: 'number',
                        string: '1',
                        number: 1,
                        line: 91,
                        column: 48
                      }
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 91,
                    column: 51
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memq',
                    line: 91,
                    column: 59
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 92, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 93, column: 3 },
          operands: [
            [
              {
                token: 'identifier',
                string: 'clear',
                line: 93,
                column: 11
              }
            ],
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 93,
                  column: 19
                }
              }
            ]
          ]
        },
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'connect',
            line: 94,
            column: 3
          },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 94,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 94,
                  column: 20
                }
              }
            ]
          ]
        }
      ]
    },
    'call' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'call', line: 97, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'pushconst',
            line: 98,
            column: 3
          },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 98,
                    column: 13
                  },
                  value: [
                    { token: '-', line: 98, column: 17 },
                    {
                      token: 'identifier',
                      string: 'ip',
                      line: 98,
                      column: 19
                    },
                    { token: '-', line: 98, column: 22 },
                    {
                      token: 'number',
                      string: '4',
                      number: 4,
                      line: 98,
                      column: 24
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'jmp', line: 99, column: 3 },
          operands: [
            [
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 99,
                  column: 14
                }
              }
            ]
          ]
        }
      ]
    },
    'return' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'return', line: 102, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'arith',
            line: 103,
            column: 3
          },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 103,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'OR',
                    line: 103,
                    column: 16
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'number',
                string: '0',
                number: 0,
                line: 103,
                column: 22
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'green',
                    line: 103,
                    column: 25
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'green',
                    line: 103,
                    column: 34
                  },
                  value: [
                    { token: '-', line: 103, column: 42 },
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 103,
                      column: 43
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 103,
                    column: 46
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memq',
                    line: 103,
                    column: 54
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 104, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 104,
                    column: 11
                  },
                  value: []
                },
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 104,
                    column: 17
                  },
                  value: [
                    { token: '-', line: 104, column: 21 },
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 104,
                      column: 22
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 104,
                    column: 25
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 105, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'arith',
            line: 106,
            column: 3
          },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 106,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'OR',
                    line: 106,
                    column: 16
                  },
                  value: []
                }
              ]
            },
            [
              {
                token: 'number',
                string: '0',
                number: 0,
                line: 106,
                column: 22
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 106,
                    column: 25
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'B',
                    line: 106,
                    column: 30
                  },
                  value: [
                    {
                      token: 'number',
                      string: '3',
                      number: 3,
                      line: 106,
                      column: 34
                    },
                    { token: '+', line: 106, column: 36 },
                    {
                      token: 'identifier',
                      string: 'ip',
                      line: 106,
                      column: 38
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 106,
                    column: 42
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'jump',
                    line: 106,
                    column: 50
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 107, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 108, column: 3 },
          operands: []
        }
      ]
    },
    'stack_setup' => {
      node: 'macro',
      macro: {
        token: 'identifier',
        string: 'stack_setup',
        line: 111,
        column: 8
      },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 112, column: 3 },
          operands: [
            [
              {
                token: 'identifier',
                string: 'clear',
                line: 112,
                column: 11
              },
              { token: '+', line: 112, column: 17 },
              {
                node: 'signals',
                signals: [
                  {
                    node: 'signal',
                    name: {
                      token: 'signal',
                      string: 'red',
                      line: 112,
                      column: 19
                    },
                    value: [
                      {
                        token: 'identifier',
                        string: 'sp',
                        line: 112,
                        column: 25
                      }
                    ]
                  }
                ]
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 112,
                    column: 29
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 113, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 113,
                    column: 11
                  },
                  value: [
                    {
                      token: 'identifier',
                      string: 'sp',
                      line: 113,
                      column: 17
                    }
                  ]
                },
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'S',
                    line: 113,
                    column: 20
                  },
                  value: [
                    {
                      token: 'identifier',
                      string: 'stack',
                      line: 113,
                      column: 24
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 113,
                    column: 31
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 114, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 115, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 116, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 117, column: 3 },
          operands: []
        }
      ]
    },
    'storeconst' => {
      node: 'macro',
      macro: {
        token: 'identifier',
        string: 'storeconst',
        line: 120,
        column: 8
      },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 121, column: 3 },
          operands: [
            [
              {
                token: 'identifier',
                string: 'clear',
                line: 121,
                column: 11
              },
              { token: '+', line: 121, column: 17 },
              {
                node: 'signals',
                signals: [
                  {
                    node: 'signal',
                    name: {
                      token: 'signal',
                      string: 'red',
                      line: 121,
                      column: 19
                    },
                    value: [
                      {
                        node: 'parameter',
                        parameter: {
                          token: 'number',
                          string: '0',
                          number: 0,
                          line: 121,
                          column: 26
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 121,
                    column: 29
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 122, column: 3 },
          operands: [
            [
              [
                {
                  node: 'signals',
                  signals: [
                    {
                      node: 'signal',
                      name: {
                        token: 'signal',
                        string: 'red',
                        line: 122,
                        column: 12
                      },
                      value: [
                        {
                          node: 'parameter',
                          parameter: {
                            token: 'number',
                            string: '0',
                            number: 0,
                            line: 122,
                            column: 19
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              { token: '+', line: 122, column: 22 },
              {
                node: 'parameter',
                parameter: {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 122,
                  column: 25
                }
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 122,
                    column: 28
                  },
                  value: []
                }
              ]
            }
          ]
        }
      ]
    },
    'append_m2m' => {
      node: 'macro',
      macro: {
        token: 'identifier',
        string: 'append_m2m',
        line: 126,
        column: 8
      },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 127, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'green',
                    line: 127,
                    column: 11
                  },
                  value: [
                    {
                      node: 'parameter',
                      parameter: {
                        token: 'number',
                        string: '0',
                        number: 0,
                        line: 127,
                        column: 20
                      }
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memq',
                    line: 127,
                    column: 23
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 128, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 129, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'connect',
            line: 130,
            column: 3
          },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 130,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 130,
                    column: 19
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 130,
                    column: 27
                  },
                  value: [
                    {
                      node: 'parameter',
                      parameter: {
                        token: 'number',
                        string: '1',
                        number: 1,
                        line: 130,
                        column: 34
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    'mov_m2m' => {
      node: 'macro',
      macro: { token: 'identifier', string: 'mov_m2m', line: 133, column: 8 },
      operations: [
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 134, column: 3 },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'green',
                    line: 134,
                    column: 11
                  },
                  value: [
                    {
                      node: 'parameter',
                      parameter: {
                        token: 'number',
                        string: '0',
                        number: 0,
                        line: 134,
                        column: 20
                      }
                    }
                  ]
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memq',
                    line: 134,
                    column: 23
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'none', line: 135, column: 3 },
          operands: [
            [
              {
                token: 'identifier',
                string: 'clear',
                line: 135,
                column: 11
              },
              { token: '+', line: 135, column: 17 },
              {
                node: 'signals',
                signals: [
                  {
                    node: 'signal',
                    name: {
                      token: 'signal',
                      string: 'red',
                      line: 135,
                      column: 19
                    },
                    value: [
                      {
                        node: 'parameter',
                        parameter: {
                          token: 'number',
                          string: '1',
                          number: 1,
                          line: 135,
                          column: 26
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 135,
                    column: 29
                  },
                  value: []
                }
              ]
            }
          ]
        },
        {
          node: 'operation',
          operator: { token: 'identifier', string: 'nop', line: 136, column: 3 },
          operands: []
        },
        {
          node: 'operation',
          operator: {
            token: 'identifier',
            string: 'connect',
            line: 137,
            column: 3
          },
          operands: [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memr',
                    line: 137,
                    column: 11
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'memw',
                    line: 137,
                    column: 19
                  },
                  value: []
                }
              ]
            },
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'red',
                    line: 137,
                    column: 27
                  },
                  value: [
                    {
                      node: 'parameter',
                      parameter: {
                        token: 'number',
                        string: '1',
                        number: 1,
                        line: 137,
                        column: 34
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  addressed_units: [
    {
      node: 'label',
      label: { token: 'identifier', string: 'init', line: 140, column: 2 }
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 112, column: 3 },
      operands: [
        [
          {
            token: 'identifier',
            string: 'clear',
            line: 112,
            column: 11
          },
          { token: '+', line: 112, column: 17 },
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'red',
                  line: 112,
                  column: 19
                },
                value: [
                  {
                    token: 'identifier',
                    string: 'sp',
                    line: 112,
                    column: 25
                  }
                ]
              }
            ]
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'memw',
                line: 112,
                column: 29
              },
              value: []
            }
          ]
        }
      ],
      address: 0
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 113, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 113, column: 11 },
              value: [
                {
                  token: 'identifier',
                  string: 'sp',
                  line: 113,
                  column: 17
                }
              ]
            },
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 113, column: 20 },
              value: [
                {
                  token: 'identifier',
                  string: 'stack',
                  line: 113,
                  column: 24
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'memw',
                line: 113,
                column: 31
              },
              value: []
            }
          ]
        }
      ],
      address: 1
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 114, column: 3 },
      operands: [],
      address: 2
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 115, column: 3 },
      operands: [],
      address: 3
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 116, column: 3 },
      operands: [],
      address: 4
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 117, column: 3 },
      operands: [],
      address: 5
    },
    {
      node: 'label',
      label: { token: 'identifier', string: 'main', line: 142, column: 2 }
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 27, column: 3 },
      operands: [
        [
          {
            token: 'identifier',
            string: 'clear',
            line: 27,
            column: 11
          }
        ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 143,
                  column: 22
                },
                value: [
                  {
                    token: 'number',
                    string: '1',
                    number: 1,
                    line: 143,
                    column: 27
                  }
                ]
              }
            ]
          }
        ]
      ],
      address: 6
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 28, column: 3 },
      operands: [
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: { token: 'signal', string: 'V', line: 143, column: 15 },
                value: [
                  {
                    token: 'number',
                    string: '5',
                    number: 5,
                    line: 143,
                    column: 19
                  }
                ]
              }
            ]
          }
        ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 143,
                  column: 22
                },
                value: [
                  {
                    token: 'number',
                    string: '1',
                    number: 1,
                    line: 143,
                    column: 27
                  }
                ]
              }
            ]
          }
        ]
      ],
      address: 7
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 65, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 65, column: 11 },
              value: [
                {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 65,
                  column: 17
                }
              ]
            },
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 65, column: 19 },
              value: [
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 65,
                  column: 23
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 65, column: 26 },
              value: []
            }
          ]
        }
      ],
      address: 8
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 66, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 66, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 66, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 66,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 66, column: 25 },
              value: []
            }
          ]
        },
        [
          {
            token: 'identifier',
            string: 'clear',
            line: 66,
            column: 32
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 66, column: 39 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 66, column: 47 },
              value: []
            }
          ]
        }
      ],
      address: 9
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 67, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 67, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 67, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 67,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 67, column: 25 },
              value: []
            }
          ]
        },
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: { token: 'signal', string: 'B', line: 98, column: 13 },
                value: [
                  { token: '-', line: 98, column: 17 },
                  {
                    token: 'identifier',
                    string: 'ip',
                    line: 98,
                    column: 19
                  },
                  { token: '-', line: 98, column: 22 },
                  {
                    token: 'number',
                    string: '4',
                    number: 4,
                    line: 98,
                    column: 24
                  }
                ]
              }
            ]
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 67, column: 36 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 67, column: 44 },
              value: []
            }
          ]
        }
      ],
      address: 10
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 68, column: 3 },
      operands: [],
      address: 11
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 69, column: 3 },
      operands: [],
      address: 12
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 32, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 32, column: 11 },
              value: [
                {
                  token: 'identifier',
                  string: 'ip',
                  line: 32,
                  column: 15
                },
                { token: '+', line: 32, column: 18 },
                {
                  token: 'number',
                  string: '3',
                  number: 3,
                  line: 32,
                  column: 20
                },
                { token: '-', line: 32, column: 22 },
                [
                  [
                    {
                      token: 'identifier',
                      string: 'fibonacci',
                      line: 144,
                      column: 15
                    }
                  ]
                ]
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'jump', line: 32, column: 28 },
              value: []
            }
          ]
        }
      ],
      address: 13
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 33, column: 3 },
      operands: [],
      address: 14
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 34, column: 3 },
      operands: [],
      address: 15
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 16, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 16, column: 11 },
              value: [
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 16,
                  column: 15
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'jump', line: 16, column: 18 },
              value: []
            }
          ]
        }
      ],
      address: 16
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 17, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 17, column: 11 },
              value: [
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 17,
                  column: 15
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'jump', line: 17, column: 18 },
              value: []
            }
          ]
        }
      ],
      address: 17
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 18, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 18, column: 11 },
              value: [
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 18,
                  column: 15
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'jump', line: 18, column: 18 },
              value: []
            }
          ]
        }
      ],
      address: 18
    },
    {
      node: 'label',
      label: {
        token: 'identifier',
        string: 'fibonacci',
        line: 147,
        column: 2
      }
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'decid', line: 38, column: 3 },
      operands: [
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: { token: 'signal', string: 'V', line: 148, column: 24 },
                value: []
              }
            ]
          }
        ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: { token: 'signal', string: '≤', line: 148, column: 29 },
                value: []
              }
            ]
          }
        ],
        [
          [
            {
              token: 'number',
              string: '1',
              number: 1,
              line: 148,
              column: 34
            }
          ]
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 38, column: 23 },
              value: []
            }
          ]
        },
        [],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 148,
                  column: 37
                },
                value: [
                  {
                    token: 'number',
                    string: '1',
                    number: 1,
                    line: 148,
                    column: 42
                  }
                ]
              }
            ]
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'jump', line: 38, column: 33 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 38, column: 41 },
              value: [
                {
                  token: 'identifier',
                  string: 'ip',
                  line: 38,
                  column: 45
                },
                { token: '+', line: 38, column: 48 },
                {
                  token: 'number',
                  string: '3',
                  number: 3,
                  line: 38,
                  column: 50
                },
                { token: '-', line: 38, column: 52 },
                [
                  {
                    token: 'identifier',
                    string: 'fib_ret',
                    line: 148,
                    column: 15
                  }
                ]
              ]
            }
          ]
        }
      ],
      address: 19
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 39, column: 3 },
      operands: [],
      address: 20
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 40, column: 3 },
      operands: [],
      address: 21
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 73, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 73, column: 11 },
              value: [
                {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 73,
                  column: 17
                }
              ]
            },
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 73, column: 19 },
              value: [
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 73,
                  column: 23
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 73, column: 26 },
              value: []
            }
          ]
        }
      ],
      address: 22
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 74, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 74, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 74, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 74,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 74, column: 27 },
              value: []
            }
          ]
        },
        [ undefined ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 74, column: 41 },
              value: []
            }
          ]
        },
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 150,
                  column: 15
                },
                value: [
                  {
                    token: 'number',
                    string: '1',
                    number: 1,
                    line: 150,
                    column: 20
                  }
                ]
              }
            ]
          }
        ]
      ],
      address: 23
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 75, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 75, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 75, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 75,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 75, column: 27 },
              value: []
            }
          ]
        },
        [
          {
            token: 'identifier',
            string: 'clear',
            line: 75,
            column: 34
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 75, column: 41 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 75, column: 49 },
              value: []
            }
          ]
        }
      ],
      address: 24
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 76, column: 3 },
      operands: [],
      address: 25
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 50, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 50, column: 19 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 50,
            column: 25
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 28 },
              value: []
            }
          ]
        },
        [ undefined ],
        [
          [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'ic',
                    line: 150,
                    column: 15
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 150,
                      column: 20
                    }
                  ]
                }
              ]
            }
          ]
        ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'memw',
                  line: 77,
                  column: 15
                },
                value: []
              }
            ]
          }
        ]
      ],
      address: 26
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 78, column: 3 },
      operands: [
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 78,
            column: 11
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: '-', line: 78, column: 16 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 78, column: 22 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 78, column: 27 },
              value: []
            }
          ]
        },
        [],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 78, column: 41 },
              value: []
            }
          ]
        },
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 150,
                  column: 15
                },
                value: [
                  {
                    token: 'number',
                    string: '1',
                    number: 1,
                    line: 150,
                    column: 20
                  }
                ]
              }
            ]
          }
        ]
      ],
      address: 27
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 151, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'V', line: 151, column: 15 },
              value: [
                { token: '-', line: 151, column: 19 },
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 151,
                  column: 20
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'ic', line: 151, column: 23 },
              value: [
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 151,
                  column: 28
                }
              ]
            }
          ]
        }
      ],
      address: 28
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 65, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 65, column: 11 },
              value: [
                {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 65,
                  column: 17
                }
              ]
            },
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 65, column: 19 },
              value: [
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 65,
                  column: 23
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 65, column: 26 },
              value: []
            }
          ]
        }
      ],
      address: 29
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 66, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 66, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 66, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 66,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 66, column: 25 },
              value: []
            }
          ]
        },
        [
          {
            token: 'identifier',
            string: 'clear',
            line: 66,
            column: 32
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 66, column: 39 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 66, column: 47 },
              value: []
            }
          ]
        }
      ],
      address: 30
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 67, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 67, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 67, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 67,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 67, column: 25 },
              value: []
            }
          ]
        },
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: { token: 'signal', string: 'B', line: 98, column: 13 },
                value: [
                  { token: '-', line: 98, column: 17 },
                  {
                    token: 'identifier',
                    string: 'ip',
                    line: 98,
                    column: 19
                  },
                  { token: '-', line: 98, column: 22 },
                  {
                    token: 'number',
                    string: '4',
                    number: 4,
                    line: 98,
                    column: 24
                  }
                ]
              }
            ]
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 67, column: 36 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 67, column: 44 },
              value: []
            }
          ]
        }
      ],
      address: 31
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 68, column: 3 },
      operands: [],
      address: 32
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 69, column: 3 },
      operands: [],
      address: 33
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 32, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 32, column: 11 },
              value: [
                {
                  token: 'identifier',
                  string: 'ip',
                  line: 32,
                  column: 15
                },
                { token: '+', line: 32, column: 18 },
                {
                  token: 'number',
                  string: '3',
                  number: 3,
                  line: 32,
                  column: 20
                },
                { token: '-', line: 32, column: 22 },
                [
                  [
                    {
                      token: 'identifier',
                      string: 'fibonacci',
                      line: 152,
                      column: 15
                    }
                  ]
                ]
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'jump', line: 32, column: 28 },
              value: []
            }
          ]
        }
      ],
      address: 34
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 33, column: 3 },
      operands: [],
      address: 35
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 34, column: 3 },
      operands: [],
      address: 36
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 82, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 82, column: 11 },
              value: [
                {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 82,
                  column: 17
                }
              ]
            },
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 82, column: 19 },
              value: [
                { token: '-', line: 82, column: 23 },
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 82,
                  column: 24
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 82, column: 27 },
              value: []
            }
          ]
        }
      ],
      address: 37
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 83, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 83, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 83, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 83,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'green',
                line: 83,
                column: 25
              },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'green',
                line: 83,
                column: 34
              },
              value: [
                { token: '-', line: 83, column: 42 },
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 83,
                  column: 43
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 83, column: 46 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memq', line: 83, column: 54 },
              value: []
            }
          ]
        }
      ],
      address: 38
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 84, column: 3 },
      operands: [],
      address: 39
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 85, column: 3 },
      operands: [
        [
          {
            token: 'identifier',
            string: 'clear',
            line: 85,
            column: 11
          }
        ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 153,
                  column: 15
                },
                value: [
                  {
                    token: 'number',
                    string: '1',
                    number: 1,
                    line: 153,
                    column: 20
                  }
                ]
              }
            ]
          }
        ]
      ],
      address: 40
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 50, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 50, column: 19 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 50,
            column: 25
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 28 },
              value: []
            }
          ]
        },
        [ undefined ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'memr',
                  line: 86,
                  column: 11
                },
                value: []
              }
            ]
          }
        ],
        [
          [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'ic',
                    line: 153,
                    column: 15
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 153,
                      column: 20
                    }
                  ]
                }
              ]
            }
          ]
        ]
      ],
      address: 41
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 73, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 73, column: 11 },
              value: [
                {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 73,
                  column: 17
                }
              ]
            },
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 73, column: 19 },
              value: [
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 73,
                  column: 23
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 73, column: 26 },
              value: []
            }
          ]
        }
      ],
      address: 42
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 74, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 74, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 74, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 74,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 74, column: 27 },
              value: []
            }
          ]
        },
        [ undefined ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 74, column: 41 },
              value: []
            }
          ]
        },
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 155,
                  column: 15
                },
                value: [
                  {
                    token: 'number',
                    string: '0',
                    number: 0,
                    line: 155,
                    column: 20
                  }
                ]
              }
            ]
          }
        ]
      ],
      address: 43
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 75, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 75, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 75, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 75,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 75, column: 27 },
              value: []
            }
          ]
        },
        [
          {
            token: 'identifier',
            string: 'clear',
            line: 75,
            column: 34
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 75, column: 41 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 75, column: 49 },
              value: []
            }
          ]
        }
      ],
      address: 44
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 76, column: 3 },
      operands: [],
      address: 45
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 50, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 50, column: 19 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 50,
            column: 25
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 28 },
              value: []
            }
          ]
        },
        [ undefined ],
        [
          [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'ic',
                    line: 155,
                    column: 15
                  },
                  value: [
                    {
                      token: 'number',
                      string: '0',
                      number: 0,
                      line: 155,
                      column: 20
                    }
                  ]
                }
              ]
            }
          ]
        ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'memw',
                  line: 77,
                  column: 15
                },
                value: []
              }
            ]
          }
        ]
      ],
      address: 46
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 78, column: 3 },
      operands: [
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 78,
            column: 11
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: '-', line: 78, column: 16 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 78, column: 22 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 78, column: 27 },
              value: []
            }
          ]
        },
        [],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 78, column: 41 },
              value: []
            }
          ]
        },
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 155,
                  column: 15
                },
                value: [
                  {
                    token: 'number',
                    string: '0',
                    number: 0,
                    line: 155,
                    column: 20
                  }
                ]
              }
            ]
          }
        ]
      ],
      address: 47
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 156, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'V', line: 156, column: 15 },
              value: [
                { token: '-', line: 156, column: 19 },
                {
                  token: 'number',
                  string: '2',
                  number: 2,
                  line: 156,
                  column: 20
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'ic', line: 156, column: 23 },
              value: [
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 156,
                  column: 28
                }
              ]
            }
          ]
        }
      ],
      address: 48
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 65, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 65, column: 11 },
              value: [
                {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 65,
                  column: 17
                }
              ]
            },
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 65, column: 19 },
              value: [
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 65,
                  column: 23
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 65, column: 26 },
              value: []
            }
          ]
        }
      ],
      address: 49
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 66, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 66, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 66, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 66,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 66, column: 25 },
              value: []
            }
          ]
        },
        [
          {
            token: 'identifier',
            string: 'clear',
            line: 66,
            column: 32
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 66, column: 39 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 66, column: 47 },
              value: []
            }
          ]
        }
      ],
      address: 50
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 67, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 67, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 67, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 67,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 67, column: 25 },
              value: []
            }
          ]
        },
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: { token: 'signal', string: 'B', line: 98, column: 13 },
                value: [
                  { token: '-', line: 98, column: 17 },
                  {
                    token: 'identifier',
                    string: 'ip',
                    line: 98,
                    column: 19
                  },
                  { token: '-', line: 98, column: 22 },
                  {
                    token: 'number',
                    string: '4',
                    number: 4,
                    line: 98,
                    column: 24
                  }
                ]
              }
            ]
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 67, column: 36 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 67, column: 44 },
              value: []
            }
          ]
        }
      ],
      address: 51
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 68, column: 3 },
      operands: [],
      address: 52
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 69, column: 3 },
      operands: [],
      address: 53
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 32, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 32, column: 11 },
              value: [
                {
                  token: 'identifier',
                  string: 'ip',
                  line: 32,
                  column: 15
                },
                { token: '+', line: 32, column: 18 },
                {
                  token: 'number',
                  string: '3',
                  number: 3,
                  line: 32,
                  column: 20
                },
                { token: '-', line: 32, column: 22 },
                [
                  [
                    {
                      token: 'identifier',
                      string: 'fibonacci',
                      line: 157,
                      column: 15
                    }
                  ]
                ]
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'jump', line: 32, column: 28 },
              value: []
            }
          ]
        }
      ],
      address: 54
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 33, column: 3 },
      operands: [],
      address: 55
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 34, column: 3 },
      operands: [],
      address: 56
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 82, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 82, column: 11 },
              value: [
                {
                  token: 'number',
                  string: '0',
                  number: 0,
                  line: 82,
                  column: 17
                }
              ]
            },
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 82, column: 19 },
              value: [
                { token: '-', line: 82, column: 23 },
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 82,
                  column: 24
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memw', line: 82, column: 27 },
              value: []
            }
          ]
        }
      ],
      address: 57
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 83, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 83, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 83, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 83,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'green',
                line: 83,
                column: 25
              },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'green',
                line: 83,
                column: 34
              },
              value: [
                { token: '-', line: 83, column: 42 },
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 83,
                  column: 43
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memr', line: 83, column: 46 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'memq', line: 83, column: 54 },
              value: []
            }
          ]
        }
      ],
      address: 58
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 84, column: 3 },
      operands: [],
      address: 59
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 85, column: 3 },
      operands: [
        [
          {
            token: 'identifier',
            string: 'clear',
            line: 85,
            column: 11
          }
        ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 158,
                  column: 15
                },
                value: [
                  {
                    token: 'number',
                    string: '1',
                    number: 1,
                    line: 158,
                    column: 20
                  }
                ]
              }
            ]
          }
        ]
      ],
      address: 60
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 50, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 50, column: 19 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 50,
            column: 25
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 28 },
              value: []
            }
          ]
        },
        [ undefined ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'memr',
                  line: 86,
                  column: 11
                },
                value: []
              }
            ]
          }
        ],
        [
          [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'ic',
                    line: 158,
                    column: 15
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 158,
                      column: 20
                    }
                  ]
                }
              ]
            }
          ]
        ]
      ],
      address: 61
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 50, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 50, column: 19 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 50,
            column: 25
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 28 },
              value: []
            }
          ]
        },
        [ undefined ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 160,
                  column: 15
                },
                value: [
                  {
                    token: 'number',
                    string: '1',
                    number: 1,
                    line: 160,
                    column: 20
                  }
                ]
              }
            ]
          }
        ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 160,
                  column: 23
                },
                value: [
                  {
                    token: 'number',
                    string: '0',
                    number: 0,
                    line: 160,
                    column: 28
                  }
                ]
              }
            ]
          }
        ]
      ],
      address: 62
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 103, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 103, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 103, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 103,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'green',
                line: 103,
                column: 25
              },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'green',
                line: 103,
                column: 34
              },
              value: [
                { token: '-', line: 103, column: 42 },
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 103,
                  column: 43
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'memr',
                line: 103,
                column: 46
              },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'memq',
                line: 103,
                column: 54
              },
              value: []
            }
          ]
        }
      ],
      address: 63
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 104, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 104, column: 11 },
              value: []
            },
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 104, column: 17 },
              value: [
                { token: '-', line: 104, column: 21 },
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 104,
                  column: 22
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'memw',
                line: 104,
                column: 25
              },
              value: []
            }
          ]
        }
      ],
      address: 64
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 105, column: 3 },
      operands: [],
      address: 65
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 106, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 106, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 106, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 106,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 106, column: 25 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 106, column: 30 },
              value: [
                {
                  token: 'number',
                  string: '3',
                  number: 3,
                  line: 106,
                  column: 34
                },
                { token: '+', line: 106, column: 36 },
                {
                  token: 'identifier',
                  string: 'ip',
                  line: 106,
                  column: 38
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'memr',
                line: 106,
                column: 42
              },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'jump',
                line: 106,
                column: 50
              },
              value: []
            }
          ]
        }
      ],
      address: 66
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 107, column: 3 },
      operands: [],
      address: 67
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 108, column: 3 },
      operands: [],
      address: 68
    },
    {
      node: 'label',
      label: { token: 'identifier', string: 'fib_ret', line: 162, column: 2 }
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 22, column: 3 },
      operands: [
        [
          {
            token: 'identifier',
            string: 'clear',
            line: 22,
            column: 11
          }
        ],
        [
          {
            node: 'signals',
            signals: [
              {
                node: 'signal',
                name: {
                  token: 'signal',
                  string: 'ic',
                  line: 163,
                  column: 23
                },
                value: [
                  {
                    token: 'number',
                    string: '0',
                    number: 0,
                    line: 163,
                    column: 28
                  }
                ]
              }
            ]
          }
        ]
      ],
      address: 69
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 50, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 50, column: 19 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 50,
            column: 25
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'each', line: 50, column: 28 },
              value: []
            }
          ]
        },
        [ [ undefined ] ],
        [
          [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'ic',
                    line: 163,
                    column: 15
                  },
                  value: [
                    {
                      token: 'number',
                      string: '1',
                      number: 1,
                      line: 163,
                      column: 20
                    }
                  ]
                }
              ]
            }
          ]
        ],
        [
          [
            {
              node: 'signals',
              signals: [
                {
                  node: 'signal',
                  name: {
                    token: 'signal',
                    string: 'ic',
                    line: 163,
                    column: 23
                  },
                  value: [
                    {
                      token: 'number',
                      string: '0',
                      number: 0,
                      line: 163,
                      column: 28
                    }
                  ]
                }
              ]
            }
          ]
        ]
      ],
      address: 70
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 103, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 103, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 103, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 103,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'green',
                line: 103,
                column: 25
              },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'green',
                line: 103,
                column: 34
              },
              value: [
                { token: '-', line: 103, column: 42 },
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 103,
                  column: 43
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'memr',
                line: 103,
                column: 46
              },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'memq',
                line: 103,
                column: 54
              },
              value: []
            }
          ]
        }
      ],
      address: 71
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'none', line: 104, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'red', line: 104, column: 11 },
              value: []
            },
            {
              node: 'signal',
              name: { token: 'signal', string: 'S', line: 104, column: 17 },
              value: [
                { token: '-', line: 104, column: 21 },
                {
                  token: 'number',
                  string: '1',
                  number: 1,
                  line: 104,
                  column: 22
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'memw',
                line: 104,
                column: 25
              },
              value: []
            }
          ]
        }
      ],
      address: 72
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 105, column: 3 },
      operands: [],
      address: 73
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'arith', line: 106, column: 3 },
      operands: [
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 106, column: 11 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'OR', line: 106, column: 16 },
              value: []
            }
          ]
        },
        [
          {
            token: 'number',
            string: '0',
            number: 0,
            line: 106,
            column: 22
          }
        ],
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 106, column: 25 },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: { token: 'signal', string: 'B', line: 106, column: 30 },
              value: [
                {
                  token: 'number',
                  string: '3',
                  number: 3,
                  line: 106,
                  column: 34
                },
                { token: '+', line: 106, column: 36 },
                {
                  token: 'identifier',
                  string: 'ip',
                  line: 106,
                  column: 38
                }
              ]
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'memr',
                line: 106,
                column: 42
              },
              value: []
            }
          ]
        },
        {
          node: 'signals',
          signals: [
            {
              node: 'signal',
              name: {
                token: 'signal',
                string: 'jump',
                line: 106,
                column: 50
              },
              value: []
            }
          ]
        }
      ],
      address: 74
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 107, column: 3 },
      operands: [],
      address: 75
    },
    {
      node: 'operation',
      operator: { token: 'identifier', string: 'nop', line: 108, column: 3 },
      operands: [],
      address: 76
    }
  ],
  labels: Map { 'init' => 0, 'main' => 6, 'fibonacci' => 19, 'fib_ret' => 69 },
  globals_size: Map {
    'sp' => undefined,
    'stack' => [
      {
        token: 'number',
        string: '20',
        number: 20,
        line: 10,
        column: 15
      }
    ]
  },
  defines: Map {
    'gtoe' => [
      {
        node: 'signals',
        signals: [
          {
            node: 'signal',
            name: { token: 'signal', string: '≥', line: 3, column: 14 },
            value: []
          }
        ]
      }
    ],
    'ne' => [
      {
        node: 'signals',
        signals: [
          {
            node: 'signal',
            name: { token: 'signal', string: '≠', line: 4, column: 12 },
            value: []
          }
        ]
      }
    ],
    'ltoe' => [
      {
        node: 'signals',
        signals: [
          {
            node: 'signal',
            name: { token: 'signal', string: '≤', line: 5, column: 14 },
            value: []
          }
        ]
      }
    ],
    'clear' => [
      {
        node: 'signals',
        signals: [
          {
            node: 'signal',
            name: { token: 'signal', string: 'white', line: 7, column: 15 },
            value: [
              {
                token: 'number',
                string: '1',
                number: 1,
                line: 7,
                column: 23
              }
            ]
          }
        ]
      }
    ],
    'ic' => [
      { token: 'number', string: '5', number: 5, line: 12, column: 12 }
    ],
    'mc' => [
      { token: 'number', string: '1', number: 1, line: 13, column: 12 }
    ]
  }
}