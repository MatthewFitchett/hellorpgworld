def run
  system("cls")
  system("jasmine-node .")
end

watch ('.*.js$') { run }
