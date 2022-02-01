module.exports = function toReadable(number) {

	const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const dozensDigits = ['','' , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	const dozen = ['','','', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
	const ten = 'ten'
	const eleven = 'eleven'
	const twelve = 'twelve'
	const twentyDigits = 'twenty'
	const thirtyDigits = 'thirty'
	const fortyDigits = 'forty'
	const fiftyDigits = 'fifty'
	const sixtyDigits = 'sixty'
	const seventyDigits = 'seventy'
	const eightyDigits = 'eighty'
	const ninetyDigits = 'ninety'
	const hundredDigits = 'hundred'
	

  if (number <= 9) {
    
    switch (number) {
      case 0:
        return 'zero'
      case 1:
        return singleDigits[1]
      case 2:
        return singleDigits[2]
      case 3:
        return singleDigits[3]
      case 4:
        return singleDigits[4]
      case 5:
        return singleDigits[5]
      case 6:
        return singleDigits[6]
      case 7:
        return singleDigits[7]
      case 8:
        return singleDigits[8]
      case 9:
        return singleDigits[9]
    }
  } else if (number <= 19) {
    switch (number) {
      case 10:
        return ten
      case 11:
        return eleven
      case 12:
        return twelve
      case 13:
        return 'thirteen'
      case 14:
        return 'fourteen'
      case 15:
        return 'fifteen'
      case 16:
        return 'sixteen'
      case 17:
        return 'seventeen'
      case 18:
        return 'eighteen'
      case 19:
        return 'nineteen'
    }
  } else if (number <= 29) {
    let j;
    if (number === 20) {
      return twentyDigits
    } else {
      for (let i = 1; i <= 9; i++) {
        if (number === i + 20) {
          j = i
        }
      }
      return `${twentyDigits} ${singleDigits[j]}`
    }
  } else if (number <= 39) {
    let j;
    if (number === 30) {
      return thirtyDigits
    } else {
      for (let i = 1; i <= 9; i++) {
        if (number === i + 30) {
          j = i
        }
      }
      return `${thirtyDigits} ${singleDigits[j]}`
    }
  } else if (number <= 49) {
    let j;
    if (number === 40) {
      return fortyDigits
    } else {
      for (let i = 1; i <= 9; i++) {
        if (number === i + 40) {
          j = i
        }
      }
      return `${fortyDigits} ${singleDigits[j]}`
    }
  } else if (number <= 59) {
    let j;
    if (number === 50) {
      return fiftyDigits
    } else {
      for (let i = 1; i <= 9; i++) {
        if (number === i + 50) {
          j = i
        }
      }
      return `${fiftyDigits} ${singleDigits[j]}`
    }
  } else if (number <= 69) {
    let j;
    if (number === 60) {
      return sixtyDigits
    } else {
      for (let i = 1; i <= 9; i++) {
        if (number === i + 60) {
          j = i
        }
      }
      return `${sixtyDigits} ${singleDigits[j]}`
    }
  } else if (number <= 79) {
    let j;
    if (number === 70) {
      return seventyDigits
    } else {
      for (let i = 1; i <= 9; i++) {
        if (number === i + 70) {
          j = i
        }
      }
      return `${seventyDigits} ${singleDigits[j]}`
    }
  } else if (number <= 89) {
    let j;
    if (number === 80) {
      return eightyDigits
    } else {
      for (let i = 1; i <= 9; i++) {
        if (number === i + 80) {
          j = i
        }
      }
      return `${eightyDigits} ${singleDigits[j]}`
    }
  } else if (number <= 99) {
    let j;
    if (number === 90) {
      return ninetyDigits
    } else {
      for (let i = 1; i <= 9; i++) {
        if (number === i + 90) {
          j = i
        }
      }
      return `${ninetyDigits} ${singleDigits[j]}`
    }
  } else if (number <= 109) {
    let j;
    if (number === 100) {
      return `one ${hundredDigits}`
    } else {
      for (let i = 1; i <= 9; i++) {
        if (number === i + 100) {
          j = i
        }
      }
      return `one ${hundredDigits} ${singleDigits[j]}`
    }
  }

  let num = number + ''
  let counter = Number(num[0])

  switch (number) {
    case 110:
      return `${singleDigits[counter]} ${hundredDigits} ${ten}`
    case 111:
      return `${singleDigits[counter]} ${hundredDigits} ${eleven}`
    case 112:
      return `${singleDigits[counter]} ${hundredDigits} ${twelve}`
    case 120:
      return `${singleDigits[counter]} ${hundredDigits} ${twentyDigits}`
    case 130:
      return `${singleDigits[counter]} ${hundredDigits} ${thirtyDigits}`
    case 140:
      return `${singleDigits[counter]} ${hundredDigits} ${fortyDigits}`
    case 150:
      return `${singleDigits[counter]} ${hundredDigits} ${fiftyDigits}`
    case 160:
      return `${singleDigits[counter]} ${hundredDigits} ${sixtyDigits}`
    case 170:
      return `${singleDigits[counter]} ${hundredDigits} ${seventyDigits}`
    case 180:
      return `${singleDigits[counter]} ${hundredDigits} ${eightyDigits}`
    case 190:
      return `${singleDigits[counter]} ${hundredDigits} ${ninetyDigits}`
    case 200:
      return `${singleDigits[counter]} ${hundredDigits}`
    case 210:
      return `${singleDigits[counter]} ${hundredDigits} ${ten}`
    case 211:
      return `${singleDigits[counter]} ${hundredDigits} ${eleven}`
    case 212:
      return `${singleDigits[counter]} ${hundredDigits} ${twelve}`
    case 220:
      return `${singleDigits[counter]} ${hundredDigits} ${twentyDigits}`
    case 230:
      return `${singleDigits[counter]} ${hundredDigits} ${thirtyDigits}`
    case 240:
      return `${singleDigits[counter]} ${hundredDigits} ${fortyDigits}`
    case 250:
      return `${singleDigits[counter]} ${hundredDigits} ${fiftyDigits}`
    case 260:
      return `${singleDigits[counter]} ${hundredDigits} ${sixtyDigits}`
    case 270:
      return `${singleDigits[counter]} ${hundredDigits} ${seventyDigits}`
    case 280:
      return `${singleDigits[counter]} ${hundredDigits} ${eightyDigits}`
    case 290:
      return `${singleDigits[counter]} ${hundredDigits} ${ninetyDigits}`
    case 300:
      return `${singleDigits[counter]} ${hundredDigits}`
    case 310:
      return `${singleDigits[counter]} ${hundredDigits} ${ten}`
    case 311:
      return `${singleDigits[counter]} ${hundredDigits} ${eleven}`
    case 312:
      return `${singleDigits[counter]} ${hundredDigits} ${twelve}`
    case 320:
      return `${singleDigits[counter]} ${hundredDigits} ${twentyDigits}`
    case 330:
      return `${singleDigits[counter]} ${hundredDigits} ${thirtyDigits}`
    case 340:
      return `${singleDigits[counter]} ${hundredDigits} ${fortyDigits}`
    case 350:
      return `${singleDigits[counter]} ${hundredDigits} ${fiftyDigits}`
    case 360:
      return `${singleDigits[counter]} ${hundredDigits} ${sixtyDigits}`
    case 370:
      return `${singleDigits[counter]} ${hundredDigits} ${seventyDigits}`
    case 380:
      return `${singleDigits[counter]} ${hundredDigits} ${eightyDigits}`
    case 390:
      return `${singleDigits[counter]} ${hundredDigits} ${ninetyDigits}`
    case 400:
      return `${singleDigits[counter]} ${hundredDigits}`
    case 410:
      return `${singleDigits[counter]} ${hundredDigits} ${ten}`
    case 411:
      return `${singleDigits[counter]} ${hundredDigits} ${eleven}`
    case 412:
      return `${singleDigits[counter]} ${hundredDigits} ${twelve}`
    case 420:
      return `${singleDigits[counter]} ${hundredDigits} ${twentyDigits}`
    case 430:
      return `${singleDigits[counter]} ${hundredDigits} ${thirtyDigits}`
    case 440:
      return `${singleDigits[counter]} ${hundredDigits} ${fortyDigits}`
    case 450:
      return `${singleDigits[counter]} ${hundredDigits} ${fiftyDigits}`
    case 460:
      return `${singleDigits[counter]} ${hundredDigits} ${sixtyDigits}`
    case 470:
      return `${singleDigits[counter]} ${hundredDigits} ${seventyDigits}`
    case 480:
      return `${singleDigits[counter]} ${hundredDigits} ${eightyDigits}`
    case 490:
      return `${singleDigits[counter]} ${hundredDigits} ${ninetyDigits}`
    case 500:
      return `${singleDigits[counter]} ${hundredDigits}`
    case 510:
      return `${singleDigits[counter]} ${hundredDigits} ${ten}`
    case 511:
      return `${singleDigits[counter]} ${hundredDigits} ${eleven}`
    case 512:
      return `${singleDigits[counter]} ${hundredDigits} ${twelve}`
    case 520:
      return `${singleDigits[counter]} ${hundredDigits} ${twentyDigits}`
    case 530:
      return `${singleDigits[counter]} ${hundredDigits} ${thirtyDigits}`
    case 540:
      return `${singleDigits[counter]} ${hundredDigits} ${fortyDigits}`
    case 550:
      return `${singleDigits[counter]} ${hundredDigits} ${fiftyDigits}`
    case 560:
      return `${singleDigits[counter]} ${hundredDigits} ${sixtyDigits}`
    case 570:
      return `${singleDigits[counter]} ${hundredDigits} ${seventyDigits}`
    case 580:
      return `${singleDigits[counter]} ${hundredDigits} ${eightyDigits}`
    case 590:
      return `${singleDigits[counter]} ${hundredDigits} ${ninetyDigits}`
    case 600:
      return `${singleDigits[counter]} ${hundredDigits}`
    case 610:
      return `${singleDigits[counter]} ${hundredDigits} ${ten}`
    case 611:
      return `${singleDigits[counter]} ${hundredDigits} ${eleven}`
    case 612:
      return `${singleDigits[counter]} ${hundredDigits} ${twelve}`
    case 620:
      return `${singleDigits[counter]} ${hundredDigits} ${twentyDigits}`
    case 630:
      return `${singleDigits[counter]} ${hundredDigits} ${thirtyDigits}`
    case 640:
      return `${singleDigits[counter]} ${hundredDigits} ${fortyDigits}`
    case 650:
      return `${singleDigits[counter]} ${hundredDigits} ${fiftyDigits}`
    case 660:
      return `${singleDigits[counter]} ${hundredDigits} ${sixtyDigits}`
    case 670:
      return `${singleDigits[counter]} ${hundredDigits} ${seventyDigits}`
    case 680:
      return `${singleDigits[counter]} ${hundredDigits} ${eightyDigits}`
    case 690:
      return `${singleDigits[counter]} ${hundredDigits} ${ninetyDigits}`
    case 700:
      return `${singleDigits[counter]} ${hundredDigits}`
    case 710:
      return `${singleDigits[counter]} ${hundredDigits} ${ten}`
    case 711:
      return `${singleDigits[counter]} ${hundredDigits} ${eleven}`
    case 712:
      return `${singleDigits[counter]} ${hundredDigits} ${twelve}`
    case 720:
      return `${singleDigits[counter]} ${hundredDigits} ${twentyDigits}`
    case 730:
      return `${singleDigits[counter]} ${hundredDigits} ${thirtyDigits}`
    case 740:
      return `${singleDigits[counter]} ${hundredDigits} ${fortyDigits}`
    case 750:
      return `${singleDigits[counter]} ${hundredDigits} ${fiftyDigits}`
    case 760:
      return `${singleDigits[counter]} ${hundredDigits} ${sixtyDigits}`
    case 770:
      return `${singleDigits[counter]} ${hundredDigits} ${seventyDigits}`
    case 780:
      return `${singleDigits[counter]} ${hundredDigits} ${eightyDigits}`
    case 790:
      return `${singleDigits[counter]} ${hundredDigits} ${ninetyDigits}`
    case 800:
      return `${singleDigits[counter]} ${hundredDigits}`
    case 810:
      return `${singleDigits[counter]} ${hundredDigits} ${ten}`
    case 811:
      return `${singleDigits[counter]} ${hundredDigits} ${eleven}`
    case 812:
      return `${singleDigits[counter]} ${hundredDigits} ${twelve}`
    case 820:
      return `${singleDigits[counter]} ${hundredDigits} ${twentyDigits}`
    case 830:
      return `${singleDigits[counter]} ${hundredDigits} ${thirtyDigits}`
    case 840:
      return `${singleDigits[counter]} ${hundredDigits} ${fortyDigits}`
    case 850:
      return `${singleDigits[counter]} ${hundredDigits} ${fiftyDigits}`
    case 860:
      return `${singleDigits[counter]} ${hundredDigits} ${sixtyDigits}`
    case 870:
      return `${singleDigits[counter]} ${hundredDigits} ${seventyDigits}`
    case 880:
      return `${singleDigits[counter]} ${hundredDigits} ${eightyDigits}`
    case 890:
      return `${singleDigits[counter]} ${hundredDigits} ${ninetyDigits}`
    case 900:
      return `${singleDigits[counter]} ${hundredDigits}`
    case 910:
      return `${singleDigits[counter]} ${hundredDigits} ${ten}`
    case 911:
      return `${singleDigits[counter]} ${hundredDigits} ${eleven}`
    case 912:
      return `${singleDigits[counter]} ${hundredDigits} ${twelve}`
    case 920:
      return `${singleDigits[counter]} ${hundredDigits} ${twentyDigits}`
    case 930:
      return `${singleDigits[counter]} ${hundredDigits} ${thirtyDigits}`
    case 940:
      return `${singleDigits[counter]} ${hundredDigits} ${fortyDigits}`
    case 950:
      return `${singleDigits[counter]} ${hundredDigits} ${fiftyDigits}`
    case 960:
      return `${singleDigits[counter]} ${hundredDigits} ${sixtyDigits}`
    case 970:
      return `${singleDigits[counter]} ${hundredDigits} ${seventyDigits}`
    case 980:
      return `${singleDigits[counter]} ${hundredDigits} ${eightyDigits}`
    case 990:
      return `${singleDigits[counter]} ${hundredDigits} ${ninetyDigits}`
}
console.log((Number(num[0] + num[1] + num[2])))
if (number === (Number(num[0] + num[1] + num[2]))) {
	if ((num[1] + num[2]) <= 19 && (num[1] + num[2]) > 11) { 
      return `${singleDigits[num[0]]} ${hundredDigits} ${dozen[num[2]]}`
	}else if (num[1] > 0) {
      return `${singleDigits[num[0]]} ${hundredDigits} ${dozensDigits[num[1]]} ${singleDigits[num[2]]}`
   } else {
      return `${singleDigits[num[0]]} ${hundredDigits} ${singleDigits[num[2]]}`
   }
}
}

