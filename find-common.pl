#!perl
# find-common.pl: Make a regex listing the common files between
# two dependency sets, given as rows of <file>\t<depends on>.

use Data::Dumper;
use 5.018;

my %sources;

while(<>) {
    my ($target, $depends_on) = split /[\t\n]/;
    $sources{$depends_on}++;
}

my @common;
while( my ($fn, $count) = each(%sources)) {
    push @common, $fn if $count>1;
}

say "'common.js': new RegExp('^(?:" . join('|', @common) . ")'),";
say "'app-specific.js': new RegExp('^(?!(?:app|" . join('|', @common) . "))'),";

# vi: set ts=4 sts=4 sw=4 et ai:
