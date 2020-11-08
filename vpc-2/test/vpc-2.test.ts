import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Vpc2 from '../lib/vpc-2-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Vpc2.Vpc2Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {
        "hellovpc26146F784": {
          "Type": "AWS::EC2::VPC",
          "Properties": {
            "CidrBlock": "10.0.0.0/16",
            "EnableDnsHostnames": true,
            "EnableDnsSupport": true,
            "InstanceTenancy": "default",
            "Tags": [
              {
                "Key": "Name",
                "Value": "MyTestStack/hello-vpc-2"
              }
            ]
          }
        },
        "subnet1SubnetA4C8FE9E": {
          "Type": "AWS::EC2::Subnet",
          "Properties": {
            "CidrBlock": "10.0.0.0/24",
            "VpcId": {
              "Ref": "hellovpc26146F784"
            },
            "AvailabilityZone": "ap-northeast-1a",
            "Tags": [
              {
                "Key": "Name",
                "Value": "MyTestStack/subnet-1"
              }
            ]
          }
        },
        "subnet1RouteTable83229C43": {
          "Type": "AWS::EC2::RouteTable",
          "Properties": {
            "VpcId": {
              "Ref": "hellovpc26146F784"
            },
            "Tags": [
              {
                "Key": "Name",
                "Value": "MyTestStack/subnet-1"
              }
            ]
          }
        },
        "subnet1RouteTableAssociationA19E784D": {
          "Type": "AWS::EC2::SubnetRouteTableAssociation",
          "Properties": {
            "RouteTableId": {
              "Ref": "subnet1RouteTable83229C43"
            },
            "SubnetId": {
              "Ref": "subnet1SubnetA4C8FE9E"
            }
          }
        },
        "subnet2SubnetCFEFB24D": {
          "Type": "AWS::EC2::Subnet",
          "Properties": {
            "CidrBlock": "10.0.1.0/24",
            "VpcId": {
              "Ref": "hellovpc26146F784"
            },
            "AvailabilityZone": "ap-northeast-1a",
            "Tags": [
              {
                "Key": "Name",
                "Value": "MyTestStack/subnet-2"
              }
            ]
          }
        },
        "subnet2RouteTableA86C1DA0": {
          "Type": "AWS::EC2::RouteTable",
          "Properties": {
            "VpcId": {
              "Ref": "hellovpc26146F784"
            },
            "Tags": [
              {
                "Key": "Name",
                "Value": "MyTestStack/subnet-2"
              }
            ]
          }
        },
        "subnet2RouteTableAssociation447A3C6F": {
          "Type": "AWS::EC2::SubnetRouteTableAssociation",
          "Properties": {
            "RouteTableId": {
              "Ref": "subnet2RouteTableA86C1DA0"
            },
            "SubnetId": {
              "Ref": "subnet2SubnetCFEFB24D"
            }
          }
        }
      }
    }, MatchStyle.EXACT))
});
