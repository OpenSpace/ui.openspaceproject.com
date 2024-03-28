node("server-ui") {
  deleteDir();
  stage("SCM") {
    checkout scm;
  }

  if (env.BRANCH_NAME == "master") {
    stage("Deploy") {
      def target = "/var/www/ui.openspaceproject.com/html";

      sh(
        script: "rm -rf ${target}/*",
        label: "Remove old files"
      );

      sh(
        script: "cp --recursive * ${target}",
        label: "Deploy files"
      );
    }
  }


  if (env.BRANCH_NAME != "master") {
    echo("Skipping the deployment as we are not working on the 'master' branch")
    currentBuild.result = "NOT_BUILT";
  }
}
