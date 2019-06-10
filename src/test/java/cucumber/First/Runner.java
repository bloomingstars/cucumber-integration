package cucumber.First;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"@rerun/failedscenario.txt"},//{"FeatureFile/exercise.feature"},
				glue="cucumber.First",
				//tags={"@search"})
				plugin={"html:C:\\Users\\swathi.dinakaran\\workspace\\CuCumberFirst\\report.html",
					"rerun:rerun/failedscenario.txt"})
public class Runner {

}
