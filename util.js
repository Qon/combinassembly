//                       ,,    ,,
// `7MMF'   `7MF' mm     db  `7MM
//   MM       M   MM           MM
//   MM       M mmMMmm `7MM    MM
//   MM       M   MM     MM    MM
//   MM       M   MM     MM    MM
//   YM.     ,M   MM     MM    MM
//    `bmmmmd"'   `Mbmo.JMML..JMML.



export function inspect(s) {
  return Deno.inspect(s, {
      showHidden: false,
      depth: null,
      maxArrayLength: null
  })
}

// export function inspect(s) {
//   return JSON.stringify(s, null, 2)
// }

export function explode(strs, ...alts) {
  return explode_with_splinters(strs, ...alts).map(([q, _])=>q)
}

export function explode_with_splinters(strs, ...alts) {
  let list = []
  for (const splinter of combinatorial(...alts)) {
    let s = strs[0]
    for (let i = 0; i < splinter.length; ++i) {
      s += splinter[i] + strs[i + 1]
    }
    list.push([s, splinter])
  }
  return list
}

export function* combinatorial(...alts) {
  // console.log('combinatorial', ...alts)
  if (!alts.length) {
    yield []
    return
  }
  for (let v of alts[0]) {
    for (let freeze of combinatorial(...alts.slice(1))) {
      yield [v, ...freeze]
    }
  }
}
