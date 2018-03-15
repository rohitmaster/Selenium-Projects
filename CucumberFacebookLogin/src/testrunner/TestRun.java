package testrunner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Feature"
		,glue="steps",monochrome=true,tags="@tag1",plugin= /*{"pretty","junit:TestReport/report/cucumber.xml"}{"pretty","html:TestReporter/report/cucumber"}
*/{"pretty","json:Folder name/report/cucumber.json"}		)

public class TestRun {

}
