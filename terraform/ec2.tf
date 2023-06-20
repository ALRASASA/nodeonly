resource "aws_instance" "my-app-example-1"{
    ami           = "ami-04597181c7f2c6471"
    instance-type = "t2.micro"
    key_name      = "devops"
    subnet_id     = subnet-09fd0e9ea32cb82a7
}
