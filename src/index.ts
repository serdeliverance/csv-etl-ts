import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

// Create an instance of MatchReader and pass in something satisfying the ' DataReader' interface
let matchReader = MatchReader.fromCsv('football-matches.csv')
let summary = Summary.winsAnalysisWithHtmlReport('Man United')

matchReader.load()
summary.buildAndPrintReport(matchReader.matches)
