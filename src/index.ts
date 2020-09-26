import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { Summary } from './Summary'

// Create an object that satisfies the 'DataReader' interface
let csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying the ' DataReader' interface
let matchReader = new MatchReader(csvFileReader)
matchReader.load()

let summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())

summary.buildAndPrintReport(matchReader.matches)
