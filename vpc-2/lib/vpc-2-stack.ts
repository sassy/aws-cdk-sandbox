import * as cdk from '@aws-cdk/core';
import { Subnet, Vpc } from "@aws-cdk/aws-ec2";

export class Vpc2Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, "hello-vpc-2", {
      cidr: "10.0.0.0/16",
      enableDnsHostnames: true,
      enableDnsSupport: true,
      subnetConfiguration: []
    });

    new Subnet(this, "subnet-1", {
      availabilityZone: "ap-northeast-1a",
      vpcId: vpc.vpcId,
      cidrBlock: "10.0.0.0/24",
    });

    new Subnet(this, "subnet-2", {
      availabilityZone: "ap-northeast-1a",
      vpcId: vpc.vpcId,
      cidrBlock: "10.0.1.0/24",
    });
  }
}
